import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'',component:EmployeeComponent,canActivate:[AuthGaurdService]},
  {path:'employees',component:EmployeeComponent,canActivate:[AuthGaurdService]},
  {path:'addemployee', component: AddEmployeeComponent,canActivate:[AuthGaurdService]},
  {path:'login',component: LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
