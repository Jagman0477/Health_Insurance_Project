import { Component, Input } from '@angular/core';
import { loginData } from './loginData';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LoginServiceService } from '../services/loginService/login-service.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {

  @Input() logUser: loginData;
  isUserLoggedIn = new BehaviorSubject<boolean>(false);

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private login: LoginServiceService){
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
  }

}
