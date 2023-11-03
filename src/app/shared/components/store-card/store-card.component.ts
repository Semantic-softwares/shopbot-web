import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
	selector: 'store-card',
	templateUrl: './store-card.component.html',
	styleUrls: ['./store-card.component.scss'],
	standalone: true,
	imports: [
		MatCardModule,
		MatButtonModule,
		FlexLayoutModule,
		MatIconModule
		]
})

export class StoreCardComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}