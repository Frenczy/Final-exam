import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {

  constructor(public config: ConfigService, public http: HttpClient) {
    super(http, config); this.entity = "orders" }
}
