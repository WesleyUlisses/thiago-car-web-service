import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { DatePipe } from '@angular/common';

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
        CalendarRoutingModule,
        SettingsModule
    ],
    declarations: [CalendarComponent],
    providers: [DatePipe]
})
export class CalendarModule { }
