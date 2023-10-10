import { Component } from '@angular/core';
import { LoginServiceService } from './services/loginService/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private login: LoginServiceService){
    
  }

  title = 'healthcare_project_angular';

  ngOnInit(): void{
    this.login.reloadDashboard()
  } 
}
