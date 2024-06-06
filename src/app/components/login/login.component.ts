import { Component, OnInit } from '@angular/core';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private loginService:LoginService){}
  credentials={
    username:'',
    password:''
  }

  onSubmit(){

    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("Form is Submitted Successfully");
    //  this.loginService.generatetoken(this.credentials).subscribe(
    //   response=>{
    //     console.log(response);
    //   },
    //   error=>{
    //     console.log(error);
    //   }
      
    //  );
      

    }else{
      console.log("Please Enter the Username and Password !!");
    }
    // console.log()

  }

ngOnInit(): void {
    
}
}
