import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CHECKOUT_ROUTES } from './check-out.routing';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, FlexLayoutModule, MatRadioModule],
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {

}
