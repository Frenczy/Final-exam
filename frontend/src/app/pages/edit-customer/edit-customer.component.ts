import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  fields: ITableCol[] = this.configService.customersTableColumns.filter(column => column.visible);
  updating : boolean = false;
  customer$: Observable<Customer | undefined> = of(new Customer() );
  customer: Customer = new Customer();
  customers$: Observable<Customer[]> = this.customerService.list$
  calculatedID: number = 0;
  newItem: boolean = false;
  
  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
    private notifyService: NotificationService,

  ) { }

  ngOnInit(): void {
    this.customerService.getAll();
    this.customers$.subscribe(e=> {this.calculatedID=(e.map(e=>e.id).sort((a,b)=>a-b)[e.length-1]+1)})
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id == 0) {
          this.customer$ = of( new Customer() );
          this.newItem = true
        } else {
          this.customer$ = this.customerService.get(params.id)
            .pipe(tap(e=>{
              this.calculatedID=e.id;
            }));
          this.newItem = false
        }
      })
  }

  showHtmlToasterUpdate(){
    this.notifyService.showHTMLMessage(`Updating was successful.`, ``, 3000)
  }

  onUpdate(form: NgForm, customer: Customer): void {

    this.updating = true;
    if (this.newItem == true){customer.id=this.calculatedID; customer.active=true; this.customerService.create(customer).subscribe(
      ()=>{this.router.navigate(['customers'])})} else
      customer.active=true; this.customerService.update(customer).subscribe(
      () => this.router.navigate(['customers'])
    )
}

}
