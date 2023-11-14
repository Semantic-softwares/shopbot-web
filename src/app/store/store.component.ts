import { Component } from '@angular/core';
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
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
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
	 MatExpansionModule,
   MatCardModule,
   MatDividerModule
   ]
})
export class StoreComponent {

}
