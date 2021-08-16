import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  list$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(http, config, 'users');
  }
}
