import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  
  users: Observable<User[]> = this.userService.getAll();
  constructor(private userService: UserService){}
}
