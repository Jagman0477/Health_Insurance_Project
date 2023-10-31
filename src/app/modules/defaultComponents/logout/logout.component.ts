import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/loginService/login-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  
  constructor(private router: Router, private login: LoginServiceService){

  }

  logoutUser(){
    localStorage.removeItem('user')
    this.login.reloadDashboard()
  }

  ngOnInit(): void{
    this.logoutUser();
  }
}
