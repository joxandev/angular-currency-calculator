import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardViewComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(DASHBOARD_ROUTES)],
  declarations: []
})
export class DashboardRoutingModule {}
