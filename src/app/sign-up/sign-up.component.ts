import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

}
