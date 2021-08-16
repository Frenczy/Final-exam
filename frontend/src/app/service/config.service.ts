import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string,
  title: string,
  icon?: string,
  order?: number,
  pattern?: string,
  required?: boolean,
  visible?: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

/*   apiUrl: string = 'http://localhost:3000'; */
  apiUrl: string = 'http://127.0.0.1:3000';

  productsTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
      visible: true,
    },
    {
      key: 'name',
      title: 'Name',
      visible: true,
    },
    {
      key: 'catID',
      title: 'Cat Id',
      visible: true,
    },
    {
      key: 'description',
      title: 'Description',
      visible: true,
    },
    {
      key: 'price',
      title: 'Price',
      visible: true,
    },
    {
      key: 'UOM',
      title: 'UOM',
      visible: true,
    },
    {
      key: 'active',
      title: 'Active',
      visible: true,
    },
    {
      key: 'edit',
      title: 'Edit/Delete',
      visible: true,
    },
  ]

  customersTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
      visible: true,
    },
    {
      key: 'firstName',
      title: 'First name',
      visible: true,
    },
    {
      key: 'lastName',
      title: 'Last name',
      visible: true,
    },
    {
      key: 'email',
      title: 'E-mail',
      visible: true,
    },
    {
      key: 'address',
      title: 'Address',
      visible: true,
    },
    {
      key: 'active',
      title: 'Active',
      visible: true,
    },
    {
      key: 'edit',
      title: 'Edit/Delete',
      visible: true,
    },

  ];

  ordersTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: 'Order No.',
      visible: true,
    },
    {
      key: 'customerID',
      title: 'Customer Id',
      visible: true,
    },
    {
      key: 'productID',
      title: 'Product Id',
      visible: true,
    },
    {
      key: 'quantity',
      title: 'Quantity',
      visible: true,
    },
    {
      key: 'amount',
      title: 'Amount',
      visible: true,
    },
    {
      key: 'status',
      title: 'Status',
      visible: true,
    },
    {
      key: 'edit',
      title: 'Edit/Delete',
      visible: true,
    },
  ];

  billsTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: 'Invoice No.',
      visible: true,
    },
    {
      key: 'orderID',
      title: 'Order Id',
      visible: true,
    },
    {
      key: 'amount',
      title: 'Amount',
      visible: true,
    },
    {
      key: 'status',
      title: 'Status',
      visible: true,
    },
    {
      key: 'edit',
      title: 'Edit/Delete',
      visible: true,
    }

  ];

  categoriesTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
      visible: true,
    },
    {
      key: 'name',
      title: 'Name',
      visible: true,
    },
    {
      key: 'description',
      title: 'Description',
      visible: true,
    },
    {
      key: 'edit',
      title: 'Edit/Delete',
      visible: true,
    }
  ];

  usersTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
      visible: true,
    },
    {
      key: 'firstName',
      title: 'First name',
      visible: true,
    },
    {
      key: 'lastName',
      title: 'Last name',
      visible: true,
    },
    {
      key: 'email',
      title: 'Email',
      visible: true,
    },
    {
      key: 'address',
      title: 'Address',
      visible: true,
    },
    {
      key: 'active',
      title: 'Active',
      visible: true,
    },
    /* {
      key: 'password',
      title: 'Password',
      visible: true,
    }, */
    {
      key: 'edit',
      title: 'Edit/Delete',
      visible: true,
    }
  ];

  constructor() {
  }
}
