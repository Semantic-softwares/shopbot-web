import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	standalone: true,
		imports: [MatToolbarModule, MatIconModule, FlexLayoutModule ]
})

export class NavbarComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}