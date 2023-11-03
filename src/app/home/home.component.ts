import { Component, OnInit } from '@angular/core';
import { HOME_ROUTES } from './home.routing';
import { FiltersComponent } from '../shared/components/filters/filters.component';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	standalone: true,
	imports: [FiltersComponent]
})

export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}