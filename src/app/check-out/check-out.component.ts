import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CHECKOUT_ROUTES } from './check-out.routing';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {

}
