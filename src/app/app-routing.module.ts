import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { TestsComponent } from './AdminComponents/tests/tests.component';
import { TestCenterComponent } from './AdminComponents/test-center/test-center.component';
import { isAuthGuard } from './auth.guard';
import { isAdminAuthGuard } from 'src/adminAuthGuard/adminauth.guard';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  { path:"login", component: LoginCompComponent },
  { path:"register", component: RegisterComponent},
  { path:"about", component: AboutComponent},
  { path:"admindashboard",component:DashboardComponent, canActivate: [isAdminAuthGuard]},
  { path:"tests", component:TestsComponent, canActivate: [isAdminAuthGuard]},
  { path:"testCenter", component:TestCenterComponent, canActivate: [isAdminAuthGuard]},
  { path:"logout", component:LogoutComponent},
  { path: "dashboard", component: CustomerDashboardComponent, canActivate: [isAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }