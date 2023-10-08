import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { registerData } from 'src/app/register/registerData';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { }

  userRegister(data: registerData){
  
    return this.http.post('http://localhost:3000/register', data)
    
  }
}
