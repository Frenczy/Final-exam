import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/model/order';
import { Customer } from 'src/app/model/customer';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { OrderService } from 'src/app/service/order.service';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  fields: ITableCol[] = this.configService.ordersTableColumns.filter(column => column.visible);
  updating : boolean = false;
  order$: Observable<Order | undefined> = of(new Order() );
  customers$: Observable<Customer[]> = this.customerService.list$
  products$: Observable<Product[]> = this.productService.list$
  orders$: Observable<Order[]> = this.orderService.list$
  categories$: Observable<Category[]> = this.categoryService.list$
  order: Order = new Order()
  selectedCategory: number = 0
  selectedCustomer: number = 0
  customerFound: number = 0
  productID: number = 0
  servicePrice: number = 0
  quantity: number = 1 
  totalPrice: number = 0
  newItem: boolean = false
  customerMin: number = 0
  customerMax: number = 0
  calculatedID: number = 0

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
    this.customerService.getAll();
    this.productService.getAll();
    this.categoryService.getAll();
    this.customers$.subscribe(e=> {this.customerMin=(e.map(e=>e.id).sort((a,b)=>b-a)[e.length-1])})
    this.customers$.subscribe(e=> {this.customerMax=(e.map(e=>e.id).sort((a,b)=>a-b)[e.length-1])})
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id == 0) {
          this.orders$.subscribe(e=> {this.calculatedID=(e.map(e=>e.id).sort((a,b)=>a-b)[e.length-1]+1)});
          this.order$ = of( new Order() );
          this.newItem = true;
        } else {

          this.newItem = false;
          this.order$ = this.orderService.get(params.id)
            .pipe(tap(e=>{
              this.productID=e.productID;
              this.selectedCustomer=e.customerID;
              this.customerFound=e.customerID;
              this.calculatedID=e.id;
              this.quantity=e.quantity;
              this.totalPrice=e.amount;
              this.servicePrice=e.amount/e.quantity;
              this.selectedCategory=e.catID;
            }));


        }
      })

      
  }

  showHtmlToasterUpdate(){
    this.notifyService.showHTMLMessage(`Updating was successful.`, ``, 3000)
  }

  showHtmlToasterMissingProperty(property:string){
    this.notifyService.showMissingProperty(`Please select ${property}.`,``, 3000)
  }

  onUpdate(form: NgForm, order: Order): void {
    if (this.customerFound==0){this.showHtmlToasterMissingProperty('valid customer'); return} else if (
      this.selectedCategory==0) {this.showHtmlToasterMissingProperty('category'); return} else if (
      this.productID==0){this.showHtmlToasterMissingProperty('service'); return} else {
    this.showHtmlToasterUpdate();
    this.updating = true;
    if(this.newItem == true){order.amount = this.totalPrice;
      order.id = this.calculatedID;
      order.productID=this.productID;
      this.orderService.create(order).subscribe(
      ()=>this.router.navigate(['orders'])
    )} else {order.amount = this.totalPrice;
      order.productID=this.productID;
      this.orderService.update(order).subscribe(
      () => this.router.navigate(['orders'])
    )
}}}

updateServicePrice(id:any): void {
  this.productID=parseInt(id)
  this.products$.subscribe(e=>{this.servicePrice=e.filter(e=>e.id==id)[0].price;
    })}

calculateTotalPrice(): void {this.totalPrice=this.servicePrice*this.quantity}

categoryChange($event:any){this.selectedCategory=$event.value; this.productID=0}

quantityChange($event:Event): void {
  this.quantity=parseInt(($event.target as HTMLInputElement).value);
  this.calculateTotalPrice()
}

serviceChange($event:any): void {this.updateServicePrice($event.value);
  this.calculateTotalPrice()
}

searchCustomer(event: Event): void {
  this.selectedCustomer = parseInt((event.target as HTMLInputElement).value);
  
  this.customers$.subscribe(e=>{this.customerFound= (e.find(e=>e.id==this.selectedCustomer) ? e.filter(e=>e.id==this.selectedCustomer)[0].id : 0)})
}

}
