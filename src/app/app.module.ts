import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { isAuthGuard } from './auth.guard';
import { HomeComponent } from './modules/defaultComponents/home/home.component';
import { AboutComponent } from './modules/defaultComponents/about/about.component';
import { LoginCompComponent } from './modules/defaultComponents/login-comp/login-comp.component';
import { LogoutComponent } from './modules/defaultComponents/logout/logout.component';
import { RegisterComponent } from './modules/defaultComponents/register/register.component';
import { FooterComponent } from './modules/defaultComponents/footer/footer.component';
import { NavbarComponent } from './modules/defaultComponents/navbar/navbar.component';
import { DefaultHomeComponent } from './modules/defaultComponents/default-home/default-home.component';
import { AdminFooterComponent } from './modules/admin/AdminComponents/admin-footer/admin-footer.component';
import { AdminHomeComponent } from './modules/admin/AdminComponents/admin-home/admin-home.component';
import { AdminNavbarComponent } from './modules/admin/AdminComponents/admin-navbar/admin-navbar.component';
import { PatientsListComponent } from './modules/admin/AdminComponents/patients-list/patients-list.component';
import { AppointmentListComponent } from './modules/admin/AdminComponents/appointment-list/appointment-list.component';
import { TestsComponent } from './modules/admin/AdminComponents/tests/tests.component';
import { TestCenterComponent } from './modules/admin/AdminComponents/test-center/test-center.component';
import { DashboardComponent } from './modules/admin/AdminComponents/dashboard/dashboard.component';
import { CustomerDashboardComponent } from './modules/customer/customer-dashboard/customer-dashboard.component';
import { AuthFooterComponent } from './modules/customer/auth-footer/auth-footer.component';
import { AuthHomeComponent } from './modules/customer/auth-home/auth-home.component';
import { AuthNavbarComponent } from './modules/customer/auth-navbar/auth-navbar.component';
import { AddAppointmentComponent } from './modules/customer/add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from './modules/customer/view-appointment/view-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginCompComponent,
    LogoutComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    DefaultHomeComponent,
    AdminFooterComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    PatientsListComponent,
    AppointmentListComponent,
    TestsComponent,
    TestCenterComponent,
    DashboardComponent,
    CustomerDashboardComponent,
    AuthFooterComponent,
    AuthHomeComponent,
    AuthNavbarComponent,
    AddAppointmentComponent,
    ViewAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
