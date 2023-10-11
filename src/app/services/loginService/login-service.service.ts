import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { loginData } from 'src/app/modules/defaultComponents/login-comp/loginData';
import { registerData } from 'src/app/modules/defaultComponents/register/registerData';
import { getDataFromLocal } from 'src/getDataFromLocal';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService{

  role!: string;
  userData!: registerData[];

  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isloginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private roleGetter: getDataFromLocal) { }

  ngOnInit(): void{
    while(this.role == undefined){
      this.role = this.roleGetter.getRole();
    }
  }

  // Dashboard reloader
    reloadDashboard(){
      if(localStorage.getItem('user')){
        this.isUserLoggedIn.next(true);
        if(this.role === 'admin')
          this.router.navigate(['/admin/dashboard']);
        else if(this.role === 'customer')
          this.router.navigate(['/auth/dashboard'])
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
              this.role = this.getRole();
              console.log(this.role);

              if(this.role === 'customer')
                return this.router.navigate(['/auth/dashboard']);
              else if(this.role === 'admin')
                return this.router.navigate(['/admin/dashboard']);
              else 
                return this.router.navigate(['/'])
            })
          } else
              console.warn("Login failed");  
              this.isloginError.emit(true);
              return false;      
        })   
      return false;
    }

    getRole(): string{
      if(localStorage.getItem('user')){
          this.userData = JSON.parse(localStorage.getItem('user') || '{}');
          if(this.userData[0]?.type === 'customer'){
            console.log("not admin");
            this.role = "customer"
          } else if(this.userData[0]?.type === 'admin') {
            this.role = "admin"
          }        
        } else 
            this.role = '';
      return this.role;
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