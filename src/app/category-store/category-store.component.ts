import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-store',
  templateUrl: './category-store.component.html',
  styleUrls: ['./category-store.component.scss'],
  standalone: true,
	imports: [
		MatCardModule,
		MatButtonModule,
		FlexLayoutModule,
		MatIconModule,
		MatListModule,
    CommonModule
		]
})
export class CategoryStoreComponent {

}
