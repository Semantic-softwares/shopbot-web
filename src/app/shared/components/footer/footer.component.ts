import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
	selector: 'footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [FlexLayoutModule]
})

export class FooterComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}