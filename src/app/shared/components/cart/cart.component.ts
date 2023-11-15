import { Component } from '@angular/core';
import { CART_ROUTES } from './cart.routing';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [FlexLayoutModule]
})
export class CartComponent {

}
