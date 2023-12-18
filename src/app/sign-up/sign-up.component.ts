import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  hide = true;

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', Validators.required],
      currency: ['', Validators.required],
      currencyCode: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  

  onSubmit() {
    if (this.registerForm.valid) {

      console.log(this.registerForm.value);
    } else {

      console.log("Form is invalid. Please check the fields.");
    }
  }
}
