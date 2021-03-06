import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './pages/bills/bills.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditBillComponent } from './pages/edit-bill/edit-bill.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'products/:id',
  component:EditProductComponent},
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'orders/:id',
    component: EditOrderComponent,
  },
  {
    path: 'bills',
    component: BillsComponent,
  },
  {
    path: 'bills/:id',
    component: EditBillComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:id',
    component: EditCategoryComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:id',
    component: EditUserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
