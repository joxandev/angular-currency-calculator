import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-routing-loader';

const APP_ROUTES: Routes = [
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
	},
	{
		path: 'calculator',
		loadChildren: () =>
			import('./calculator/calculator.module').then((m) => m.CalculatorModule),
		data: { preload: true },
	},
	{
		path: 'admin',
		loadChildren: () =>
			import('./admin/admin.module').then((m) => m.AdminModule),
	},
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(APP_ROUTES, {
			preloadingStrategy: AppCustomPreloader,
		}),
	],
	providers: [AppCustomPreloader],
	declarations: [],
	exports: [],
})
export class AppRoutingModule {}
