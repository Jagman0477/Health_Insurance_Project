import { Component, Input } from '@angular/core';
import { loginData } from './loginData';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {

  @Input() logUser: loginData;

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.logUser = new loginData();
  }

  ngOnInit(): void{
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

}
