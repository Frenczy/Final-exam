import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user$:BehaviorSubject<User | null> = this.auth.currentUserSubject$
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onLogout():void{
    this.auth.logout()}
}
