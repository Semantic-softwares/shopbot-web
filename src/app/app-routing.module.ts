import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {path: '', loadChildren: () => import('./home/home.routing').then(mod => mod.HOME_ROUTES)},
  {path: '', loadChildren: () => import('./store/store.routing').then(mod => mod.STORE_ROUTES)}
  {path: '', loadChildren: () => import('./store-item/store-item.routing').then(mod => mod.STOREITEM_ROUTES)},
  {path: '', loadChildren: () => import('./shared/components/cart/cart.routing').then(mod => mod.CART_ROUTES)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }