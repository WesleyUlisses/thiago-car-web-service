import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})
export class CalendarComponent implements OnInit {


    public data: object[] = [
        {
            Id: 1,
            Subject: 'Meeting',
            StartTime: new Date(2023, 1, 15, 10, 0),
            EndTime: new Date(2023, 1, 15, 12, 30)
        },
    ];
    public selectedDate: Date;
    public eventSettings: EventSettingsModel;


    constructor() { }

    async ngOnInit() {

        this.eventSettings = { dataSource: this.data };
        this.selectedDate = new Date();

    }
}
