import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../model/category';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category>{

  list$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(http, config, 'categories');
  }
}
