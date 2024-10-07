import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartModule } from 'primeng/chart'
import { DashboardComponent } from './dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		DashboardRoutingModule,
		ChartModule
	],
	declarations: [DashboardComponent]
})
export class DashboardModule { }
