import {HttpClient} from '@angular/common/http'
import { registerData } from 'src/app/modules/defaultComponents/register/registerData';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient, private router: Router) { }

// User register api call
  userRegister(data: registerData){
    this.http.post('http://localhost:3000/register', data, {observe: 'response'}).subscribe((result) => {
      console.warn("result", result);
      this.router.navigate(['login'])
    })
    
    return false;
  }
}
