import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface ITableColumn {
  title:string;
  key:string;
  hidden?:boolean;
  outputTransform?:any;
  htmlOutput?:any}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = "http://localhost:3000/"

  userColumns:ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "firstname", title: "First Name"},
    {key: "lastname", title: "Last Name"},
    {key: "email", title: "Email"},
    {key: "address", title: "Address"},
    {key: "active", title: "Active"},
  ]
  productColumns:ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "description", title: "Description"},
    {key: "price", title: "Price", outputTransform: (v:number)=>`${v} Ft`},
    {key: "active", title: "Active", htmlOutput:ConfigService.activeOrInactiveSign},
  ]
  orderColumns:ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "customer", title: "Customer"},
    {key: "products", title: "Products"},
    {key: "time", title: "Time"},
    {key: "note", title: "Note"},
  ]

  constructor() { }

  static activeOrInactiveSign(v:boolean):string{
    const icon:string = v ? 'fa-check' : 'fa-ban'
    return `<i class="fas ${icon}"></i>`
  }
}
