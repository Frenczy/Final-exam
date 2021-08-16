import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/common/sidebar/sidebar.component';
import { NavbarComponent } from './pages/common/navbar/navbar.component';
import { InfoCardComponent } from './pages/common/info-card/info-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './pages/customers/customers.component';
import { BillsComponent } from './pages/bills/bills.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { EditBillComponent } from './pages/edit-bill/edit-bill.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import { ChartComponent } from './pages/common/chart/chart.component';
import { SumPipe } from './pipe/sum.pipe';
import { LoginComponent } from './pages/login/login.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { UsersComponent } from './pages/users/users.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { JwtInterceptorInterceptor } from './service/jwt-interceptor.interceptor';
import { IdFilterPipe } from './pipe/id-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SorterPipe,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    InfoCardComponent,
    ProductsComponent,
    EditProductComponent,
    CustomersComponent,
    BillsComponent,
    OrdersComponent,
    CategoriesComponent,
    EditBillComponent,
    EditCustomerComponent,
    EditOrderComponent,
    ChartComponent,
    SumPipe,
    LoginComponent,
    EditCategoryComponent,
    UsersComponent,
    EditUserComponent,
    IdFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
