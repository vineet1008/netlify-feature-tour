// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/restfulapi/auth/login";

  // constructor(private http:HttpClient) {}

  //  generatetoken(credentials:any){
  //   //token generate
  //   return this.http.post(`${this.url}`,credentials)
  //  }

  // loginUser(token){
  //   localStorage.setItem("token",token);
  //   return true;
  // }

  isLoggenIn(){
    let token=localStorage.getItem("token");

    if(token=='' || token==null || token==undefined){
      return false;
    }else{
      return true;
    }
  }
    logout(){
      localStorage.removeItem("token");
      return true;
    }
 
}
