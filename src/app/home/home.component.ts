import { Component, OnInit } from '@angular/core';
import { HOME_ROUTES } from './home.routing';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	standalone: true,
	imports: [NavbarComponent]
})

export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}