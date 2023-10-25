import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { StoreCardComponent } from './shared/components/store-card/store-card.component';
import { FiltersComponent } from './shared/components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    StoreCardComponent,
    FiltersComponent,
  ]
})
export class AppModule { }
