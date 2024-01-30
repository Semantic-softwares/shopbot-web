import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { map } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;
  allCountries: any[] = []
  selectedOption: any;
  private host = 'https://shopbot.ngrok.io/';
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.fetchCountry();
  }
  onCountryFetch() {
    this.fetchCountry();
  }
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  SignupData() {
    if (this.signupForm.invalid) return;
    console.log(this.signupForm.value);
    console.log("form submited");
    const signupEndpoint = this.host + 'users';
    this.http.post(signupEndpoint, this.signupForm.value).subscribe(
      (response: any) => {
        console.log(response);
        alert('Signup successful!');
        this.router.navigate(["/"])
      },
      (error) => {
        console.error('Error during signup:', error);
      }
    )
  }
  private fetchCountry() {
    this.http.get<any[]>('https://shopbot.ngrok.io/delivery-zones')
      .pipe(map((resp) => {
        const countries = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            countries.push({ ...resp[key], id: key })
          }
        }
        return countries;
      }))
      .subscribe((countries) => {
        console.log(countries);
        this.allCountries = countries;
      })
  }

}
