import { Component, Input } from '@angular/core';
import { registerData } from './registerData';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // @Input() regUser: registerData;

  registerForm: FormGroup;
  // name: FormControl;
  // age: FormControl;
  // gender: FormControl;
  // email: FormControl;
  // password: FormControl;
  // confirmPassword: FormControl;


  constructor(private builder: FormBuilder){}

  ngOnInit(){  
    this.registerForm = this.builder.group(
      {
        name = new FormControl('', [Validators.required,Validators.minLength(5)]);
        age = new FormControl('', [Validators.required]);
        gender = new FormControl('', [Validators.required]);
        email = new FormControl('', [Validators.required]);
        password = new FormControl('', [Validators.required]);
        confirmPassword = new FormControl('', [Validators.required]);
        // name: this.name,
        // age: this.age,
        // gender: this.gender,
        // email: this.email,
        // password: this.password,
        // confirmPassword: this.confirmPassword
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    )
  }

  submit(){
    alert("done");
  }

}
