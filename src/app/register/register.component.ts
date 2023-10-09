import { Component, Input } from '@angular/core';
import { registerData } from './registerData';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from './matchpassword.validator';
import { RegisterServiceService } from '../services/registerService/register-service.service';
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

  // createForm() {
  //   this.registerForm = this.fb.group(
  //     {
  //       // name: this.fb.control<string>('', [Validators.required, Validators.minLength(4)]),
  //       // age: this.fb.control<number>(0, [Validators.required]),
  //       // gender : this.fb.control<string>('', Validators.required),
  //       // email : this.fb.control<string>('', [Validators.required, Validators.email]),
  //       // password : this.fb.control<string>('', [Validators.required, Validators.minLength(6)]),
  //       // confirmPassword : this.fb.control<string>('', [Validators.required, Validators.minLength(6)])
  //       'name': new FormControl(null, [Validators.required, Validators.minLength(4)]),
  //       'age': new FormControl(null, [Validators.required]),
  //       'gender' : new FormControl(null, Validators.required),
  //       'email' : new FormControl(null, [Validators.required, Validators.email]),
  //       'password' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
  //       'confirmPassword' : new FormControl(null, [Validators.required, Validators.minLength(6)])
  //     },{
  //         validators: validatePassword
  //     }
  //   )
  // }

  ngOnInit(): void{  
    this.registerForm = new FormGroup(
      {
        // name: this.fb.control<string>('', [Validators.required, Validators.minLength(4)]),
        // age: this.fb.control<number>(0, [Validators.required]),
        // gender : this.fb.control<string>('', Validators.required),
        // email : this.fb.control<string>('', [Validators.required, Validators.email]),
        // password : this.fb.control<string>('', [Validators.required, Validators.minLength(6)]),
        // confirmPassword : this.fb.control<string>('', [Validators.required, Validators.minLength(6)])
        'name': new FormControl(null, [Validators.required, Validators.minLength(4)]),
        'age': new FormControl(null, [Validators.required]),
        'gender' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'password' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'confirmPassword' : new FormControl(null, [Validators.required, Validators.minLength(6)])
      },{
          validators: validatePassword
      }
    )
  }

  submit(data: registerData){
    this.register.userRegister(data);
  }

}
