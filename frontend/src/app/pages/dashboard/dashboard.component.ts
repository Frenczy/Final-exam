import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { InfoCard } from 'src/app/pages/common/info-card/info-card.component'
import { AuthService } from 'src/app/service/auth.service';
import { BillService } from 'src/app/service/bill.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: InfoCard[] = [
    { title: 'Services', content: '102', cardClass: 'card-header-warning', footer: 'Active Services', footericon: 'commute', icon: 'receipt', routerLink: '/products' },
    { title: 'Customers', content: '321', cardClass: 'card-header-success', footer: 'Active Customers', footericon: 'arrow_circle_up', icon: 'person', routerLink: '/customers' },
    { title: 'Orders', content: '202', cardClass: 'card-header-danger', footer: 'Number of Unpaid Orders', footericon: 'assessment', icon: 'shopping_cart', routerLink: '/orders' },
    { title: 'Invoices', content: '321', cardClass: 'card-header-info', footer: 'Sum of Unpaid Invoices', footericon: 'euro_symbol',  icon: 'payment', routerLink: '/bills' }
  ]
  user$:BehaviorSubject<User | null> = this.auth.currentUserSubject$
  combinedSubscription: Subscription = new Subscription();

  orderChartLabels: Label[] = ['new', 'ordered', 'delivered'];
  orderChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Orders' }
  ];

  customerChartLabels: Label[] = ['active', 'inactive'];
  customerChartData: ChartDataSets[] = [
    { data: [0, 0], label: 'Customers' }
  ];

  productChartLabels: Label[] = ['active', 'inactive'];
  productChartData: ChartDataSets[] = [
    { data: [0, 0], label: 'Products' }
  ];

  billChartLabels: Label[] = ['new', 'issued', 'paid'];
  billChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Invoices' }
  ];

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private billService: BillService,
    private orderService: OrderService,
    private auth: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    if(this.user$==null){this.router.navigate(['/login'])}

    this.combinedSubscription = combineLatest([
      this.productService.list$,
      this.orderService.list$,
      this.customerService.list$,
      this.billService.list$,
    ]).subscribe(
      data => {
        this.cards[0].content = String(data[0].filter(product => product.active === true).length);
        this.cards[1].content = String(data[2].filter(customer => customer.active === true).length);
        this.cards[2].content = String(data[1].filter(order => order.status === 'new').length);
        this.cards[3].content = String('$' + data[3].filter(bill => bill.status === 'new')
          .map(bill => bill.amount)
          .reduce((first, second) => first + second, 0).toLocaleString("en-US"));

        const newOrders: number =
          data[1].filter(order => order.status === 'new').length;
        const orderedOrders: number =
          data[1].filter(order => order.status === 'ordered').length;
        const deliveredOrders: number =
          data[1].filter(order => order.status === 'delivered').length;
        this.orderChartData[0].data = [newOrders, orderedOrders, deliveredOrders]

        const activeCustomers: number =
          data[2].filter(customer => customer.active === true).length;
        const inactiveCustomers: number =
          data[2].filter(customer => customer.active === false).length;
        this.customerChartData[0].data = [activeCustomers, inactiveCustomers]

        const activeProducts: number =
          data[0].filter(product => product.active === true).length;
        const inactiveProducts: number =
          data[0].filter(product => product.active === false).length;
        this.productChartData[0].data = [activeProducts, inactiveProducts]

        const newBills: number =
          data[3].filter(bill => bill.status === 'new')
            .map(bill => bill.amount)
            .reduce((first, second) => first + second, 0);
        const issuedBills: number =
          data[3].filter(bill => bill.status === 'issued')
            .map(bill => bill.amount)
            .reduce((first, second) => first + second, 0);
        const paidBills: number =
          data[3].filter(bill => bill.status === 'paid')
            .map(bill => bill.amount)
            .reduce((first, second) => first + second, 0);
        this.billChartData[0].data = [newBills, issuedBills, paidBills]
      }
    );

    this.productService.getAll();
    this.customerService.getAll();
    this.orderService.getAll();
    this.billService.getAll();

  }

  ngOnDestroy(): void {
    this.combinedSubscription.unsubscribe();
  }

}
