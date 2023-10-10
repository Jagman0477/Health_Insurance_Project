import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminComponents/admin-home/admin-home.component';
import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { PatientsListComponent } from './AdminComponents/patients-list/patients-list.component';
import { TestCenterComponent } from './AdminComponents/test-center/test-center.component';
import { TestsComponent } from './AdminComponents/tests/tests.component';
import { LogoutComponent } from '../customer/logout/logout.component';
import { AppointmentListComponent } from './AdminComponents/appointment-list/appointment-list.component';

const routes: Routes = [
  {path: '', component: AdminHomeComponent, 
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'patientList', component: PatientsListComponent },
      {path: 'testCenter', component: TestCenterComponent },
      {path: 'tests', component: TestsComponent },
      {path: '', redirectTo: 'admin/home', pathMatch: 'full' },
      {path: 'logout', component: LogoutComponent },
      {path: 'appointmentList', component: AppointmentListComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
