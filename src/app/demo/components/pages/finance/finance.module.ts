import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { ChartModule } from 'primeng/chart'
import { FinanceComponent } from './finance.component';

@NgModule({
	imports: [
		CommonModule,
		FinanceRoutingModule,
		ChartModule
	],
	declarations: [FinanceComponent]
})
export class FinanceModule { }
