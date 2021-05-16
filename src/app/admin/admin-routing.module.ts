import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const ADMIN_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: AdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ADMIN_ROUTES)],
  declarations: []
})
export class AdminRoutingModule {}
