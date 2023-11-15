import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'item-review',
  standalone: true,

    imports: [
      CommonModule, 
      FlexLayoutModule,
    ],
  templateUrl: './item-review.component.html',
  styleUrls: ['./item-review.component.scss']
})
export class ItemReviewComponent {

}
