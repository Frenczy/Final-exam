import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User()
  
  constructor(private userService:UserService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onLogin():void{
    this.auth.login(this.user).subscribe(
      user=>{
        // ha van user, az illetőt átirányítjuk a főoldalra
        if(user){
          this.router.navigate(['/']).then(()=>{window.location.reload()})
        } else {alert('Hibás felhasználó')}
      }
    )
  }

  // ez a kódrészlet élesben nincs aktiválva, csak a példa kedvéért hagytam benne
  setPassword():void{
    this.userService.update({id: 1, password: 'test'})
      .subscribe(e=>console.log(e))
  }
}
