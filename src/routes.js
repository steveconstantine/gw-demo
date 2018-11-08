import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';
import AppSuperContainerApollo from './Containers/appsupercontainer';
import CartSuperContainerApollo from './Containers/cartsupercontainer';
import ProductContainerApollo from './Containers/productcontainer';

export default [
  {
    path: '/art/:id',
    exact: true,
    component: ProductContainerApollo,
  },
  {
    path: '/cart',
    exact: true,
    component: CartSuperContainerApollo,
  },
  {
    path: '/',
    component: AppSuperContainerApollo,
  }
];
