
import { CalendarComponent } from './calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModalModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        ScheduleModule,
    ],
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
    declarations: [CalendarComponent],
    exports: [CalendarComponent],
})
export class CalendareModule { }
