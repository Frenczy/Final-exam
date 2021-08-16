const chokidar = require('chokidar')
const { exec } = require('child_process')

let run = false;
chokidar.watch('./src').on('all', (event, patch)=>{
    if (run) {
        exec('docker restart frontend_api', (error, std)=>{
            if (error){return console.error(error)}
            console.log(`Watcher: `, std)
        })
    }
})

setTimeout( () => {
    run = true;
}, 10000)