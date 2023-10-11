// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AdminRoutingModule } from '../admin/admin-routing.module';
// import { AuthHomeComponent } from './auth-home/auth-home.component';
// import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
// import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
// import { AuthFooterComponent } from './auth-footer/auth-footer.component';
// import { RegisterComponent } from '../defaultComponents/register/register.component';
// import { LoginCompComponent } from '../defaultComponents/login-comp/login-comp.component';
// import { LogoutComponent } from './logout/logout.component';
// import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
// import { NavbarComponent } from '../defaultComponents/navbar/navbar.component';
// import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '../admin/AdminComponents/home/home.component';

// const routes: Routes = [
//   {path: '', component: AuthHomeComponent, 
//     children: [
//       {path: '', redirectTo: '/auth/home', pathMatch: 'full'},
//       {path: 'dashboard', component: CustomerDashboardComponent },
//       {path: 'viewAppointment', component: ViewAppointmentComponent },
//       {path: 'addAppointment', component: AddAppointmentComponent},
//       {path: 'logout', component: LogoutComponent},
//       {path: 'home', component: HomeComponent}
//     ],
//   },
// ];

// @NgModule({
//   declarations: [
//     AuthFooterComponent,
//     AuthHomeComponent,
//     ViewAppointmentComponent,
//     AddAppointmentComponent,
//     AuthFooterComponent,
//     LogoutComponent,
//     CustomerDashboardComponent,
//     AuthNavbarComponent
//   ],
//   imports: [
//     FormsModule,
//     ReactiveFormsModule,
//     CommonModule,
//     AdminRoutingModule,
//     RouterModule.forChild(routes)
//   ]
// })
// export class AuthModule { }
