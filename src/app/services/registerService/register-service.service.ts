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
  userRegister(data: any){
    this.http.post('http://localhost:8080/PERSON_SERVICE/api/register', data, {observe: 'response'}).subscribe((result) => {
      if(result.status === 201)
        this.router.navigate(['login'])
      else 
        this.router.navigate(['missing'])
    })
    
    return false;
  }
}
