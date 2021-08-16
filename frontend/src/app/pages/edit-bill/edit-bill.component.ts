import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { BillService } from 'src/app/service/bill.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';
import { tap } from 'rxjs/operators';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  fields: ITableCol[] = this.configService.billsTableColumns.filter(column => column.visible);
  updating : boolean = false;
  bill$: Observable<Bill | undefined> = of(new Bill() );
  bills$: Observable<Bill[]> = this.billService.list$
  bill: Bill = new Bill();
  orders$: Observable<Order[]> = this.orderService.list$
  ordersList: Order[] = [];
  newItem: boolean = false;
  calculatedID: number = 0;
  orderMin: number = 0
  orderMax: number = 0
  selectedOrder: number = 0;
  orderFound: number = 0;
  price: number = 0;

  constructor(
    private billService: BillService,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
    private notifyService : NotificationService,
  ) { }

  ngOnInit(): void {
    this.billService.getAll();
    this.orderService.getAll();
    this.orders$.subscribe(e=> {this.orderMin=(e.map(e=>e.id).sort((a,b)=>b-a)[e.length-1])})
    this.orders$.subscribe(e=> {this.orderMax=(e.map(e=>e.id).sort((a,b)=>a-b)[e.length-1])})
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id == 0) {
          this.bills$.subscribe(e=> {this.calculatedID=(e.map(e=>e.id).sort((a,b)=>a-b)[e.length-1]+1)})
          this.bill$ = of( new Bill() );
          this.newItem = true;
          this.orders$.subscribe(e=>this.ordersList = e)
        } else {
          this.bill$ = this.billService.get(params.id)
            .pipe(tap(e=>{
              this.calculatedID=e.id;
            }));
          
          this.newItem = false
        }
      })
  }

  updatePrice(): void {
    this.price = this.ordersList.filter(e=>e.id== this.orderFound)[0].amount}

  showHtmlToasterUpdate(){
    this.notifyService.showHTMLMessage(`Updating was successful.`, ``, 3000)
  }
  showHtmlToasterMissingProperty(property:string){
    this.notifyService.showMissingProperty(`Please select ${property}.`,``, 3000)
  }

  onUpdate(form: NgForm, bill: Bill): void {
    if (this.newItem == true){
      if (this.orderFound==0){this.showHtmlToasterMissingProperty('valid order ID'); return} else {
      this.showHtmlToasterUpdate();
      this.updating = true;
      bill.amount=this.price;
      bill.id=this.calculatedID;
      this.billService.create(bill).subscribe(
      () => this.router.navigate(['bills']))}} else {
        this.showHtmlToasterUpdate();
        this.updating = true;
    this.billService.update(bill).subscribe(
      () => this.router.navigate(['bills'])
    )}
}

searchOrder(event: Event): void {
  this.selectedOrder = parseInt((event.target as HTMLInputElement).value);
  
  this.orders$.subscribe(e=>{this.orderFound= (e.find(e=>e.id==this.selectedOrder) ? e.filter(e=>e.id==this.selectedOrder)[0].id : 0); this.updatePrice()})
}

issueInvoice(){this.notifyService.showHTMLMessage(`Please save your invoice.`, `Invoice was issued to printer!`, 3000)}

}

