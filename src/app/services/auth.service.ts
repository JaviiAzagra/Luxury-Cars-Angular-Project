import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router, 
    private http: HttpClient) { 
  }

  getToken(){
    return localStorage.getItem("token");
  }

  isLogged(){
    let token = localStorage.getItem("token");
    return token != null ? true : false;
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/"])
  }

}
