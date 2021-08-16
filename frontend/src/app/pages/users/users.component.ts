import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';
import { NotificationService } from 'src/app/service/notification.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

interface IPageBtn {
  page: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  cols: ITableCol[] = this.config.usersTableColumns;
  users$: Observable<User[]> = this.userService.list$.pipe(
    tap( users => this.userProperties.count = users.length )
  );

  filterKey: string = '--Select searching key--';
  filterKeys: string[] = ['--Select searching key--', ...Object.keys(new User())].filter(e=>e!='_id');

  constructor(
    private config: ConfigService,
    private userService: UserService,
    private notifyService : NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  user: User = new User();

  onUpdate(user: User): void {

    if (user.id === 0) {
      this.userService.create(user);
    }

    this.userService.update(user);
  }

  onDelete(user: User): void {
    this.userService.remove(user).subscribe(
      () => this.userService.getAll()
    )
  }

  showHtmlToasterDelete(){
    this.notifyService.showHTMLMessage(`Deleting was successful.`, ``, 3000)
  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  userProperties: {count: number} = {
    count: 0,
  };
  pageSize: number = 20;
  pageStart: number = 1;
  currentPage: number = 1;
  get paginator(): IPageBtn[] {
    const pages: IPageBtn[] = [];
    for (let i = 0; i < this.userProperties.count / this.pageSize && pages.length < 10; i++ ) {
      const page = this.pageStart + i;
      pages.push({page});
    }
    return pages;
  }
  get pageSliceStart(): number {
    const index = this.currentPage - 1;
    return index === 0 ? 0 : (index * this.pageSize);
  }
  get pageSliceEnd(): number {
    return this.pageSliceStart + this.pageSize;
  }

  onPaginate(event: Event, btn: IPageBtn): void {
    event.preventDefault();
    this.currentPage = btn.page;
    this.pageStart = (btn.page - 5) < 1 ? 1 : (btn.page - 5);
  }

  onStepPage(event: Event, step: number): void {
    event.preventDefault();
    this.currentPage += step;
    this.pageStart = (this.currentPage - 5) < 1 ? 1 : (this.currentPage - 5);
  }

  columnKey: string = '';
  sortDir: number = -1;

  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.sortDir = this.sortDir * (-1);
  }
}
