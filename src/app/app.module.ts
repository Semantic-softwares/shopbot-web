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
import { StoreItemComponent } from './store-item/store-item.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DeliveryLocationModalComponent } from './shared/components/delivery-location-modal/delivery-location-modal.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { ItemReviewComponent } from './shared/components/item-review/item-review.component';
import { CheckOutComponent } from './check-out/check-out.component';


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
      StoreItemComponent,
      DeliveryLocationModalComponent,
      CartComponent,
      ItemCardComponent,
      ItemReviewComponent,
      SignUpComponent,
      CartComponent,
      CheckOutComponent,
    ]
})
export class AppModule { }