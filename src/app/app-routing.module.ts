import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {path: '', loadChildren: () => import('./landing-page/landing-page.routing').then(mod => mod.LANDING_ROUTES)},
  {path: '', loadChildren: () => import('./home/home.routing').then(mod => mod.HOME_ROUTES)},
  {path: '', loadChildren: () => import('./store/store.routing').then(mod => mod.STORE_ROUTES)},
  {path: '', loadChildren: () => import('./store/store.routing').then(mod => mod.STORE_ROUTES)},
  {path: '', loadChildren: () => import('./login-page/login-page.component.routing').then(mod => mod.LoginPageComponent_ROUTES)},
  {path: '', loadChildren: () => import('./sign-up/sign-up.component.routing').then(mod => mod.SignUpComponent_ROUTES)},
  {path: '', loadChildren: () => import('./store-item/store-item.routing').then(mod => mod.STOREITEM_ROUTES)},
  {path: '', loadChildren: () => import('./check-out/check-out.routing').then(mod => mod.CHECKOUT_ROUTES)},
  {path: '', loadChildren: () => import('./cart/cart.routing').then(mod => mod.CART_ROUTES)},
  {path: '', loadChildren: () => import('./category-store/category-store.routing').then(mod => mod.CATEGORYSTORE_ROUTES)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }