import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import {  CommonModule, JsonPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  standalone: true,
imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private http:HttpClient,private snackBar:MatSnackBar){
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName:['',Validators.required],
      password:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: [''],
      address: [''],
      isActive: [1, Validators.required],
      role: [[], Validators.required],
    });
  }
 user = {
    firstName: '',
    lastName: '',
    userName:'',
    password:'',
    email: '',
    phoneNo: '',
    address: '',
    isActive: 1,
    role: [] as string[]
  };
  availableRoles = ['USER', 'ADMIN', 'MANAGER'];
  onSubmit() {
   if (this.signupForm.valid) {
      const signupData = this.signupForm.value;
      console.log('Form Submitted!', this.signupForm.value);
      // Perform your signup logic here, like sending the form data to your backend server
      // Replace with your Spring Boot backend endpoint
      this.http.post('http://localhost:8080/restfulapi/signup/createuser',signupData,{responseType:'text'})
        .subscribe({
          next: (res) => {
            // console.log('Signup success:', res);
            // alert(res);
              this.snackBar.open(res, 'Close', {
            duration: 3000,  // 3 seconds
            panelClass: ['success-snackbar']  // optional CSS class
            });
            this.signupForm.reset();
          },
          error: (err) => {
            // console.error('Signup error:', err);
            // alert('Signup failed!');
              this.snackBar.open('Signup Failed! ' + err.message, 'Close', {
              duration: 3000,
            panelClass: ['error-snackbar']
      });
          }
        });
   }
  }

}