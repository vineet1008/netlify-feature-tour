import { Component, OnInit } from '@angular/core';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
login:FormGroup;

constructor(private fb: FormBuilder,private http:HttpClient,private snackBar:MatSnackBar){
  this.login=this.fb.group({
    userName:['',Validators.required],
    password:['',Validators.required]
  });
}

logindata = {
  userName:'',
  password:''
}

onSubmit(){
    if (this.login.valid) {
      const signupData = this.login.value;
      console.log('Login Form Submitted!', this.login.value);
     this.http.post('http://localhost:8080/restfulapi/login',this.login,{responseType:'text'})
        .subscribe({
          next: (res) => {
            // console.log('Signup success:', res);
            // alert(res);
              this.snackBar.open(res, 'Close', {
            duration: 3000,  // 3 seconds
            panelClass: ['success-snackbar']  // optional CSS class
            });
            this.login.reset();
          },
          error: (err) => {
            // console.error('Signup error:', err);
            // alert('Signup failed!');
              this.snackBar.open('Login Failed! ' + err.message, 'Close', {
              duration: 3000,
            panelClass: ['error-snackbar']
      });
          }
        });
}
}



}
