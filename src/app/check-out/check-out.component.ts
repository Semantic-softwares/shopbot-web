import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CHECKOUT_ROUTES } from './check-out.routing';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    RouterModule, 
    MatIconModule, 
    FlexLayoutModule, 
    MatRadioModule, 
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ]
})

export class CheckOutComponent {

}
