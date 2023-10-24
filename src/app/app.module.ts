import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { StoreCardComponent } from './shared/components/store-card/store-card.component';
import { CategoryCardComponent } from './shared/components/category-card/category-card.component';

@NgModule({
    declarations: [
        AppComponent,
        StoreCardComponent,
        CategoryCardComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NavbarComponent,
        [MatButtonModule, MatTooltipModule]
    ]
})
export class AppModule { }
