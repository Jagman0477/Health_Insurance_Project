import { Component } from '@angular/core';
import { Appointment } from './appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  
  model=new Appointment();
  
  submitResultForm(){

  }
}
