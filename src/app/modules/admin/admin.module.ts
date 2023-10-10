import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './AdminComponents/admin-home/admin-home.component';
import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './AdminComponents/admin-navbar/admin-navbar.component';
import { PatientsListComponent } from './AdminComponents/patients-list/patients-list.component';
import { TestCenterComponent } from './AdminComponents/test-center/test-center.component';
import { TestsComponent } from './AdminComponents/tests/tests.component';
import { AdminFooterComponent } from './AdminComponents/admin-footer/admin-footer.component';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './AdminComponents/appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    DashboardComponent,
    AdminNavbarComponent,
    PatientsListComponent,
    TestCenterComponent,
    TestsComponent,
    AdminFooterComponent,
    AppointmentListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AdminHomeComponent]
})
export class AdminModule { }
