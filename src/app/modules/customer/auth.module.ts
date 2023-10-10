import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AuthFooterComponent,
    AuthHomeComponent,
    ViewAppointmentComponent,
    AddAppointmentComponent,
    AuthFooterComponent,
    RegisterComponent,
    LoginCompComponent,
    LogoutComponent,
    CustomerDashboardComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AuthModule { }
