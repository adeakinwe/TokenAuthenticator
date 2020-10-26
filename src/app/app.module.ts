import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EmployeeComponent } from './employee/employee.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { httpInterceptProviders } from './http-interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './user/user.service';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './http-interceptor/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    AddEditEmpComponent,
    ShowEmpComponent,
    EmployeeComponent,
    SpinnerComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    SharedService,
    UserService,
    AuthGuard,
    httpInterceptProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
