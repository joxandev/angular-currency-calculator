import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, DashboardRoutingModule],
  providers: [AuthGuard],
  declarations: [DashboardViewComponent]
})
export class DashboardModule {}
