import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductsComponent } from './page/products/products.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'users', component:UsersComponent},
  {path:'products', component:ProductsComponent},
  {path:'orders', component:OrdersComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
