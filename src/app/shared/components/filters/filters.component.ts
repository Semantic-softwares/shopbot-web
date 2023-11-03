import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule}   from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
	selector: 'filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.scss'],
	standalone: true,
	imports: [
	 MatIconModule, 
	 FlexLayoutModule,
	 MatRadioModule, 
	 MatSlideToggleModule,
	 MatButtonModule, 
	 MatSliderModule, 
	 FormsModule,
	 MatListModule, 
	 MatChipsModule,
	 MatExpansionModule
   ]		
})

export class FiltersComponent implements OnInit {
	panelOpenState = false;

	constructor() { }

	ngOnInit() { }
}