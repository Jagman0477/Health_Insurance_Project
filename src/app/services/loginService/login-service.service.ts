import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { loginData } from 'src/app/modules/customer/login-comp/loginData';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService{

  role!: string;

  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isloginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  setRole(val: string){
    this.role = val
  }

  // Dashboard reloader
    reloadDashboard(){
      if(localStorage.getItem('user')){
        this.isUserLoggedIn.next(true);
        if(this.role === 'admin')
          this.router.navigate(['admindashboard']);
        else if(this.role === 'customer')
          this.router.navigate(['admindashboard'])
      } else 
        this.router.navigate(['/']);
    }

    userLogin(data: loginData){
      this.http.get(`http://localhost:3000/register?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result: any) => {
        if(result && result.body && result.body.length){
            this.http.get(`http://localhost:3000/register?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result2: any) => {
              console.warn(data);
              this.isUserLoggedIn.next(true); 
              localStorage.setItem('user', JSON.stringify(result2.body));
              console.warn("result", result2.body);
              console.warn("User logged in");
              console.log(this.role);

              if(this.role === 'customer')
                return this.router.navigate(['dashboard']);
              else if(this.role === 'admin')
                return this.router.navigate(['admindashboard']);
              return this.router.navigate(['/'])
            })
          } else
              console.warn("Login failed");  
              this.isloginError.emit(true);
              return false;      
        })   
      return false;
    }

}


// User login api call
  // userLogin(data: loginData){
  //   this.http.post('http://localhost:3000/login', data, {observe: 'response'}).subscribe((result) => {
      
  //     this.isUserLoggedIn.next(true); 
  //     localStorage.setItem('user', JSON.stringify(result.body));
  //     console.warn("result", result.body);
  //     console.warn("User logged in");
  //     return this.router.navigate(['dashboard']);
  //   })