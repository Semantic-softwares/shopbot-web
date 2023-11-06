import { Component, OnInit } from '@angular/core';
import { HOME_ROUTES } from './home.routing';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { FiltersComponent } from '../shared/components/filters/filters.component';
import { StoreCardComponent } from '../shared/components/store-card/store-card.component';
import { CategoryCardComponent } from '../shared/components/category-card/category-card.component';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	standalone: true,
	imports: [ 
		CommonModule,
		FlexLayoutModule, 
		BannerComponent, 
		FiltersComponent, 
		StoreCardComponent, 
		CategoryCardComponent
	]
})

export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}