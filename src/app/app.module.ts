import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { StoreCardComponent } from './shared/components/store-card/store-card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
=======
import { StoreItemComponent } from './store-item/store-item.component';
import { CartComponent } from './shared/components/cart/cart.component';


@NgModule({
    declarations: [
        AppComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterOutlet,
        NavbarComponent,
        StoreCardComponent,
        FooterComponent,
        StoreComponent,
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      RouterOutlet,
      NavbarComponent,
      StoreCardComponent,
      FooterComponent,
      StoreItemComponent,
      CartComponent
    ]
})
export class AppModule { }
