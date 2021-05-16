import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [SigninComponent, SignupComponent, AdminDashboardComponent]
})
export class AdminModule {}
