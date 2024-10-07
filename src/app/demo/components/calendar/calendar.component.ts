import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
[x: string]: any;
    currentDate: Date = new Date();
    events: { [key: string]: string[] } = {};
    showModal: boolean = false;
    selectedDate: string = '';
    eventName: string = '';
    daysInMonth: number = 0;
    constructor() { }

    ngOnInit(): void {
        this.events = {
            '2021-09-15': ['Troca de óleo', 'Revisão de freios', 'Conserto de painel', 'Troca de bateria']
        };
    }

    dataMock: any[] = [
        { customerName: 'João Silva', vehicleModel: 'Gol 1.0', serviceType: 'Troca de óleo', serviceDate: '2021-09-15', serviceTime: '08:00', mechanicName: 'Carlos Almeida', status: 'Pendente' },
        { customerName: 'Maria Santos', vehicleModel: 'Civic 2.0', serviceType: 'Revisão de freios', serviceDate: '2021-09-15', serviceTime: '10:00', mechanicName: 'Paulo Souza', status: 'Pendente' },
        { customerName: 'José Oliveira', vehicleModel: 'Corolla 1.8', serviceType: 'Conserto de painel', serviceDate: '2021-09-15', serviceTime: '14:00', mechanicName: 'Rodrigo Santos', status: 'Pendente' },
        { customerName: 'Ana Souza', vehicleModel: 'HB20 1.6', serviceType: 'Troca de bateria', serviceDate: '2021-09-15', serviceTime: '16:00', mechanicName: 'Fernanda Oliveira', status: 'Pendente' }
    ];

    // Verifica se o dia possui eventos
    hasEvents(date: string): boolean {
        return this.dataMock.some(event => event.serviceDate === date);
    }

    // Retorna os eventos do dia
    getEventsForDay(date: string): any[] {
        return this.dataMock.filter(event => event.serviceDate === date);
    }

    // Abre a modal com os eventos do dia
    openEventModal(date: string, event: any) {
        // Lógica para abrir modal
        this.selectedDate = date;
        // this.selectedEvent = event;
        this.showModal = true;
    }
}
