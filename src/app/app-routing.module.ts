import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './http-interceptor/auth-guard.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: 'register',
    component: UserComponent,
    children: [{ path: '', component: RegisterComponent }],
  },
  { path: 'employee', component: EmployeeComponent, canActivate:[AuthGuard] },
  { path: 'department', component: DepartmentComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
