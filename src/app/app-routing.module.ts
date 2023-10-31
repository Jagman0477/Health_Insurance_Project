import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthGuard } from './auth.guard';
import { isAdminAuthGuard } from 'src/adminAuthGuard/adminauth.guard';
import { LogoutComponent } from './modules/defaultComponents/logout/logout.component';
import { AboutComponent } from './modules/defaultComponents/about/about.component';
import { HomeComponent } from './modules/defaultComponents/home/home.component';
import { LoginCompComponent } from './modules/defaultComponents/login-comp/login-comp.component';
import { registerData } from './modules/defaultComponents/register/registerData';
import { DefaultHomeComponent } from './modules/defaultComponents/default-home/default-home.component';
import { CustomerDashboardComponent } from './modules/customer/customer-dashboard/customer-dashboard.component';
import { ViewAppointmentComponent } from './modules/customer/view-appointment/view-appointment.component';
import { AddAppointmentComponent } from './modules/customer/add-appointment/add-appointment.component';
import { DashboardComponent } from './modules/admin/AdminComponents/dashboard/dashboard.component';
import { PatientsListComponent } from './modules/admin/AdminComponents/patients-list/patients-list.component';
import { TestCenterComponent } from './modules/admin/AdminComponents/test-center/test-center.component';
import { TestsComponent } from './modules/admin/AdminComponents/tests/tests.component';
import { AppointmentListComponent } from './modules/admin/AdminComponents/appointment-list/appointment-list.component';
import { isCustomerAuthGuard } from 'src/customerAuthGuard/auth.guard';
import { RegisterComponent } from './modules/defaultComponents/register/register.component';

const routes: Routes = [
  { path:"admin", children: [
      {path: 'dashboard', component: DashboardComponent, canActivate:[isAdminAuthGuard]},
      {path: 'patientList', component: PatientsListComponent, canActivate:[isAdminAuthGuard]},
      {path: 'testCenter', component: TestCenterComponent, canActivate:[isAdminAuthGuard]},
      {path: 'tests', component: TestsComponent , canActivate:[isAdminAuthGuard]},
      {path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      {path: 'logout', component: LogoutComponent , canActivate:[isAdminAuthGuard]},
      {path: 'appointmentList', component: AppointmentListComponent, canActivate:[isAdminAuthGuard]},
      {path: 'home', component: HomeComponent}
  ]},
  { path:"auth", children: [
      {path: '', redirectTo: '/auth/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: CustomerDashboardComponent, canActivate:[isCustomerAuthGuard] },
      {path: 'viewAppointment', component: ViewAppointmentComponent, canActivate:[isCustomerAuthGuard] },
      {path: 'addAppointment', component: AddAppointmentComponent, canActivate:[isCustomerAuthGuard]},
      {path: 'logout', component: LogoutComponent, canActivate:[isCustomerAuthGuard]},
      {path: 'home', component: HomeComponent}
  ]},
  { path: "logout", component: LogoutComponent},
  { path: "about", component: AboutComponent},
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "login", component: LoginCompComponent},
  { path: "register", component: RegisterComponent},
  { path: "home", component: DefaultHomeComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }