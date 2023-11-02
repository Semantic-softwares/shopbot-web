import { Component, OnInit } from '@angular/core';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';


@Component({
	selector: 'banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss'],
	standalone: true,
	imports: [FlexLayoutModule, MatIconModule]
})

export class BannerComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}