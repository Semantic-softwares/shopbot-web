import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from 'src/services/login-service/login-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})

export class LoginPageComponent {
  hide = true;

  private host = 'https://shopbot.ngrok.io/';

  constructor(private http: HttpClient) {}


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  loginData() {
    if (this.loginForm.invalid) return;

    console.log(this.loginForm.value);
    console.log("form submited");

    const loginEndpoint = this.host + 'users';


    this.http.post(loginEndpoint, this.loginForm.value).subscribe(
      (response: any) => {
        console.log('POST success:', response); 
        alert('Log In successful!');
      },
      (error) => {
        console.error('POST error:', error);
      }
    );
  }
}