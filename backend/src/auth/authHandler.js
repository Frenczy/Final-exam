const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model')


/* (async()=>{
const admin = new UserModel({name: 'admin', email: 'admin', password: 'admin_pw'})
const user = new UserModel({name: 'user', email: 'user', password: 'user_pw'})
await admin.save();
await user.save()
})(); */

const Users = [{email: 'admin@gmail.com',
                password: 'admin_pw',
                role: 'admin'},
                {email: 'user@gmail.com',
                password: 'user_pw',
                role: 'user'}];

// a tokeneket eltárolom egy tömbben
const refreshTokens = []

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = Users.find( 
        u => u.email === email && u.password === password)

    const User = await UserModel.findOne({email})

    if (user /* && user.verifyPassword(password) */ ) {
        console.log(user)
        const accessToken = jwt.sign({
            username: user.username,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            // expiring token beállítása
            expiresIn: process.env.TOKEN_EXPIRY});

        const refreshToken = jwt.sign({
            username: user.username,
            role: user.role
            // frissülő token beállítása
        }, process.env.REFRESH_TOKEN_SECRET)
        // a refresh token tömbbe beleírjuk az adott tokent
        refreshTokens.push(refreshToken)
        res.json({
            accessToken,
            refreshToken,
            user});
    } else {
        res.send('Username or password incorrect.');}};

// refresh token beállítása
module.exports.refresh = (req, res, next) => {
    const { token } = req.body
    if(!token){return res.sendStatus(401)}
    if(!refreshTokens.includes(token)){return res.sendStatus(403)}
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {return res.sendStatus(403)}
            const accessToken = jwt.sign({
                username:user.username, role:user.role}, 
                process.env.ACCESS_TOKEN_SECRET,{
                    expiresIn:process.env.TOKEN_EXPIRY})
            res.json({accessToken})})} 

// kijelentkezés
module.exports.logout= function(request, response){
    const { token } = request.body
    if(!refreshTokens.includes(token)){res.sendStatus(403)}
    const tokenIndex = refreshTokens.indexOf(token)
    refreshTokens.splice(tokenIndex, 1)
    response.sendStatus(200)}

