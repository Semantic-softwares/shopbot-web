import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
	selector: 'category-card',
	templateUrl: './category-card.component.html',
	styleUrls: ['./category-card.component.scss'],
	standalone: true,
	imports: [
    	CommonModule, FlexLayoutModule
  ],
})

export class CategoryCardComponent implements OnInit {
	categories: string[] = Array(12).fill('Deals');

	constructor() { }

	ngOnInit() { }
}