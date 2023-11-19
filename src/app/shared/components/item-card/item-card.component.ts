import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  standalone: true,
  styleUrls: ['./item-card.component.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ]
})
export class ItemCardComponent {

}
