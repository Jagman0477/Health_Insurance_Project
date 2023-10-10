import { Component, Input } from '@angular/core';
import { loginData } from './loginData';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LoginServiceService } from '../services/loginService/login-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {

  @Input() logUser: loginData;
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  authError = "";

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private login: LoginServiceService, private http: HttpClient){
    this.logUser = new loginData();
  }

  ngOnInit(): void{
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onsubmit = (data: loginData) => {
    this.login.userLogin(data);
    this.login.isloginError.subscribe((e) => {
      if(e)
        this.authError="User email or password is invalid."
    })
  }

  // userLoginBackend(data: loginData){
  //   console.warn(data);
  //   this.http.get(`http://localhost:3000/login?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result: any) => {
  //   console.warn(result);
  //     if(result && result.body && result.body.length){

  //     }
  //     else 
  //       console.warn("Login failed");
  //   })    
  // }

}
