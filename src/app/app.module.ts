import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { TestsComponent } from './AdminComponents/tests/tests.component';
import { AdminNavbarComponent } from './AdminComponents/admin-navbar/admin-navbar.component';
import { TestCenterComponent } from './AdminComponents/test-center/test-center.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    RegisterComponent,
    HomeComponent,
 
    DashboardComponent,
    TestsComponent,
    AdminNavbarComponent,
    TestCenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
