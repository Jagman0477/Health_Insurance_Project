import { Component, Input } from '@angular/core';
import { registerData } from './registerData';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from './matchpassword.validator';
import { RegisterServiceService } from 'src/app/services/registerService/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Input() regUser: registerData;

  registerForm!: FormGroup;
  allGenders: string[] = ['Male', 'Female', 'Others'];

  constructor(private fb: FormBuilder, private register: RegisterServiceService, private router: Router){
    // this.createForm();
    this.regUser = new registerData();
  }

  ngOnInit(): void{  
    this.registerForm = new FormGroup(
      {
        'name': new FormControl(null, [Validators.required, Validators.minLength(4)]),
        'age': new FormControl(null, [Validators.required]),
        'contactNo': new FormControl(null, [Validators.required]),
        'gender' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'password' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'confirmPassword' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'role': new FormControl("USER")
      },{
          validators: validatePassword
      }
    )
  }

  submit(data: registerData){

    let newData = {
      userPassword: data.password,
      userName: data.name,
      contactNo: data.contactNo,
      userRole: data.role,
      userEmail: data.email,
      userAge: data.age,
      gender: data.gender
    }
    
    this.register.userRegister(newData);
  }

}
