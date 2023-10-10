import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

const routes: Routes = [
  {path: '', component: AuthHomeComponent, 
    children: [
      {path: 'dashboard', component: CustomerDashboardComponent },
      {path: 'viewAppointment', component: ViewAppointmentComponent },
      {path: 'addAppointment', component: AddAppointmentComponent},
      {path: '', redirectTo: 'auth/home', pathMatch: 'full' },
      {path: 'logout', component: LogoutComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
