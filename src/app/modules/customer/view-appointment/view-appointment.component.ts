import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from './appointment';
import { AppointmentService } from 'src/app/services/appointmentService/appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css'],
})
export class ViewAppointmentComponent {
  model = new Appointment();

  constructor(
    private appoinmentService: AppointmentService,
    private router: Router
  ) {}

  appointmentList: undefined | Appointment[];

  appointmentMessage: undefined | string;

  ngOnInit(): void {
    this.refreshingList();
  }

  signUp(data: Appointment[]): void {
    this.appoinmentService.userSignup(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['appointmentList']);

        this.refreshingList();
      }
    });
  }

  refreshingList() {
    this.appoinmentService.appointmentList().subscribe((result) => {
      console.warn(result);

      this.appointmentList = result;
    });
  }

  deleteAppointment = (id: number) => {
    console.warn('test id', id);

    this.appoinmentService.deleteAppointment(id).subscribe((result) => {
      if (result) {
        this.appointmentMessage = 'appointment is deleted';

        this.refreshingList();
      }
    });

    setTimeout(() => {
      this.appointmentMessage = undefined;
    }, 3000);
  };
}
