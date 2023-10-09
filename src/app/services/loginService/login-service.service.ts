import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { loginData } from 'src/app/login-comp/loginData';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

// User login api call
  userLogin(data: loginData){
    this.http.post('http://localhost:3000/login', data, {observe: 'response'}).subscribe((result) => {
      
      this.isUserLoggedIn.next(true); 
      localStorage.setItem('user', JSON.stringify(result.body));
      console.warn("result", result.body);
      return this.router.navigate(['dashboard']);
    })
    
    return false;
  }
}