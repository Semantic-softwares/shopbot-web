import { Component, OnInit } from '@angular/core';
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