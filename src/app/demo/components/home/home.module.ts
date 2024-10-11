import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { HomeRoutingModule } from './home-routing.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { ServicesModule } from '../pages/services/services.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { AvailabilityModule } from '../pages/availability/availability.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        HomeRoutingModule,
        SettingsModule,
        ServicesModule,
        DashboardModule,
        AvailabilityModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
