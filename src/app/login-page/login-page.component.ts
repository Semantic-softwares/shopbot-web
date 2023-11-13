import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
    

})
export class LoginPageComponent {

}
