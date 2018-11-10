import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';
import AppSuperContainerApollo from './Containers/appsupercontainer';
import CartSuperContainerApollo from './Containers/cartsupercontainer';
import ProductSuperContainer from './Containers/productsupercontainer';

export default [
  {
    path: '/art/:id',
    exact: true,
    component: ProductSuperContainer,
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
