import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompComponent } from './modules/customer/login-comp/login-comp.component';
import { RegisterComponent } from './modules/customer/register/register.component';
import { isAuthGuard } from './auth.guard';
import { isAdminAuthGuard } from 'src/adminAuthGuard/adminauth.guard';
import { AboutComponent } from './modules/customer/about/about.component';
import { LogoutComponent } from './modules/customer/logout/logout.component';
import { CustomerDashboardComponent } from './modules/customer/customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  { path:"admin", loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)},
  { path:"auth", loadChildren: () => import('./modules/customer/auth.module').then((m) => m.AuthModule)}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }