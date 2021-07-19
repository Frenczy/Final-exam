import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService <T>{


  entity: string = ""

  constructor(public http:HttpClient, public config:ConfigService) { }

  getAll():Observable<T[]>{
    return this.http.get<T[]>(`${this.config.apiUrl}${this.entity}`)}

  // mongoose _id-val dolgozik
  get(_id: string): Observable<T> {
    return this.http.get<T>(`${this.config.apiUrl}${this.entity}/${_id}`)}
  
  
}
