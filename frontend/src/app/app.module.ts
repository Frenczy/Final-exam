import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// külön felveszem
import { HttpClientModule } from '@angular/common/http';
// külön felveszem
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductsComponent } from './page/products/products.component';
import { UsersComponent } from './page/users/users.component';
import { OrdersComponent } from './page/orders/orders.component';
import { DataTableComponent } from './common/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // külön felveszem
    HttpClientModule,
    // külön felveszem
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
