import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from '@angular/router';


@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	standalone: true,
	imports: [MatToolbarModule, MatIconModule, FlexLayoutModule, MatButtonModule, MatBadgeModule, RouterModule]

})

export class NavbarComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}