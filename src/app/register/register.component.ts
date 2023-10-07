import { Component, Input } from '@angular/core';
import { registerData } from './registerData';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validatePassword } from './matchpassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Input() regUser: registerData;

  registerForm!: FormGroup;
  allGenders: string[] = ['Male', 'Female', 'Others'];

  constructor(private fb: FormBuilder){
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
        'name': new FormControl(null, [Validators.required, Validators.minLength(4)]),
        'age': new FormControl(null, [Validators.required]),
        'gender' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),     
        'password' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'confirmPassword' : new FormControl(null, [Validators.required, Validators.minLength(6)])   
        // name: this.name,
        // age: this.age,
        // gender: this.gender,
        // email: this.email,
        // password: this.password,
        // confirmPassword: this.confirmPassword
      }, {
        validators: validatePassword 
      }
    )
  }

  submit(){
    console.log(this.registerForm);
  }

}
