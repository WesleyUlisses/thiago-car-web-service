import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

interface Event {
    title?: string;
    date: Date;
    customerName: string;
    vehicleModel: string;
    serviceType: string;
    serviceTime: string;
    mechanicName: string;
    status: string;
}

@Component({
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    selector: 'app-calendar',
    providers: [DatePipe, CommonModule],

})


export class CalendarComponent implements OnInit, OnDestroy {

    date: Date;
    days: string[];
    dates: { date: number, events: Event[] }[];
    currentMonth: Date;
    dataMock: Event[] = [
        {
            customerName: 'João Silva', vehicleModel: 'Gol 1.0', serviceType: 'Troca de óleo', date: new Date('2021-09-15'), serviceTime: '08:00', mechanicName: 'Carlos Almeida', status: 'Pendente',
        },
        { customerName: 'Maria Santos', vehicleModel: 'Civic 2.0', serviceType: 'Revisão de freios', date: new Date('2021-09-15'), serviceTime: '10:00', mechanicName: 'Paulo Souza', status: 'Pendente' },
        { customerName: 'José Oliveira', vehicleModel: 'Corolla 1.8', serviceType: 'Conserto de painel', date: new Date('2021-09-15'), serviceTime: '14:00', mechanicName: 'Rodrigo Santos', status: 'Pendente' },
        { customerName: 'Ana Souza', vehicleModel: 'HB20 1.6', serviceType: 'Troca de bateria', date: new Date('2021-09-15'), serviceTime: '16:00', mechanicName: 'Fernanda Oliveira', status: 'Pendente' }
    ];

    constructor() {
        this.currentMonth = new Date();
        this.days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        this.dates = [];
        this.date = new Date();
    }

    ngOnInit(): void {
        this.generateCalendar();
    }

    generateCalendar(): void {
        const month = this.currentMonth.getMonth();
        const year = this.currentMonth.getFullYear();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const totalDays = lastDay.getDate();
        const firstDayIndex = firstDay.getDay();

        this.dates = [];

        for (let i = 0; i < firstDayIndex; i++) {
            this.dates.push({ date: null, events: [] });
        }

        for (let date = 1; date <= totalDays; date++) {
            const eventList = this.dataMock.filter(event =>
                new Date(event.date).getFullYear() === year &&
                new Date(event.date).getMonth() === month &&
                new Date(event.date).getDate() === date
            );

            this.dates.push({ date, events: eventList });
        }
    }

    prevMonth() {

        //vamos mudar o mês atual para o mês anterior
        this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    }

    nextMonth() {
        //vamos mudar o mês atual para o próximo mês
        this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    }

    ngOnDestroy() {

    }
}
