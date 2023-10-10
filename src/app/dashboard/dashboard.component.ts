import { Component } from '@angular/core';
import { LoginServiceService } from '../services/loginService/login-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private login: LoginServiceService) {  }

  ngOnInit(): void{
    this.login.reloadDashboard();
  }

}
