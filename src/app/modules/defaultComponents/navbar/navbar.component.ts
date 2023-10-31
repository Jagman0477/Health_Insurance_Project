import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { registerData } from '../register/registerData';
import { LoginServiceService } from 'src/app/services/loginService/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class NavbarComponent {

  role!: string;

  // constructor(private navbarTS: navbarTS){
  //   this.role = navbarTS.role;
  // }

  userData!: registerData[];

  constructor(private router: Router, private login: LoginServiceService){ }

  ngOnInit(): void{
    this.router.events.subscribe((val: any) => {
      if(val.url){
        if(localStorage.getItem('user')){
          this.userData = JSON.parse(localStorage.getItem('user') || '{}');
          if(this.userData[0]?.role === 'USER'){
            console.log("not admin");
            this.role = "customer"
          } else if(this.userData[0]?.role === 'CUSTOMER') {
            this.role = "admin"
          }        
        } else 
            this.role = '';
      }
      // console.log(this.role);
      // this.sendValueIntoService(this.role);       
    })
  }
  // private selectedRole = new BehaviorSubject<string>('');
  // currRole = this.selectedRole.asObservable();
  // // Set role
  // setRole(){
  //   this.selectedRole.next(this.role);
  // }
  // sendValueIntoService(value: string) {
  //   this.login.setRole(value);
  // }
}
