import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  fields: ITableCol[] = this.configService.usersTableColumns.filter(column => column.visible);
  updating : boolean = false;
  user$: Observable<User | undefined> = of(new User() );
  user: User = new User();
  newItem: boolean = false;
  
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
    private notifyService: NotificationService,

  ) { }

  ngOnInit(): void {
    this.userService.getAll();
    this.activatedRoute.params.subscribe(
      params => {
        console.log(params.id);
        if (params.id == 0) {
          this.user$ = of( new User() );
          this.newItem = true
        } else {
          this.user$ = this.userService.get(params.id);
          this.newItem = false
        }
      })
  }

  showHtmlToasterUpdate(){
    this.notifyService.showHTMLMessage(`Updating was successful.`, ``, 3000)
  }

  onUpdate(form: NgForm, user: User): void {

    this.updating = true;
    if (this.newItem == true){this.userService.create(user).subscribe(
      ()=>{this.router.navigate(['customers'])})} else
    this.userService.update(user).subscribe(
      () => this.router.navigate(['users'])
    )
}

}
