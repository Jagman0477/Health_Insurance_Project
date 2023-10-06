import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { TestsComponent } from './AdminComponents/tests/tests.component';
import { AdminNavbarComponent } from './AdminComponents/admin-navbar/admin-navbar.component';
import { TestCenterComponent } from './AdminComponents/test-center/test-center.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    RegisterComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    TestsComponent,
    AdminNavbarComponent,
    TestCenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
