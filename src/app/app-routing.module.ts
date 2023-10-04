import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { TestsComponent } from './AdminComponents/tests/tests.component';
import { TestCenterComponent } from './AdminComponents/test-center/test-center.component';

const routes: Routes = [
  { path:"login", component: LoginCompComponent },
  { path:"register", component: RegisterComponent},
  { path:"dashboard",component:DashboardComponent},
  { path:"tests", component:TestsComponent},
  { path:"testCenter", component:TestCenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
