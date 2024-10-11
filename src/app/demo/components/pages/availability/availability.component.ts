import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/demo/models/appointment';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AppointmentService } from 'src/app/demo/service/appointment.service';
import { CalendarComponent } from '../../calendar/calendar.component';

@Component({
    selector: 'app-availability',
    templateUrl: './availability.component.html',
    providers: [MessageService, CalendarComponent  ]
})
export class AvailabilityComponent implements OnInit {

    appointmentDialog: boolean = false;

    deleteAppointmentDialog: boolean = false;

    deleteAppointmentsDialog: boolean = false;

    appointments: Appointment[] = [];

    appointment: Appointment = {};

    selectedAppointments: Appointment[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [
        { label: 'Pendente', value: 'Pendente' },
        { label: 'Confirmado', value: 'Confirmado' },
        { label: 'Concluído', value: 'Concluído' },
        { label: 'Cancelado', value: 'Cancelado' }
    ];

    serviceTypes: any[] = [
        { label: 'Troca de óleo', value: 'Troca de óleo' },
        { label: 'Conserto de painel', value: 'Conserto de painel' },
        { label: 'Revisão de freios', value: 'Revisão de freios' },
        { label: 'Troca de bateria', value: 'Troca de bateria' },
        // Adicione mais tipos de serviço conforme necessário
    ];

    mechanics: any[] = [
        { label: 'Carlos Almeida', value: 'Carlos Almeida' },
        { label: 'Paulo Souza', value: 'Paulo Souza' },
        { label: 'Rodrigo Santos', value: 'Rodrigo Santos' },
        { label: 'Fernanda Oliveira', value: 'Fernanda Oliveira' },
        // Adicione mais mecânicos conforme necessário
    ];

    dataMock: any[] = [
        { customerName: 'João Silva', vehicleModel: 'Gol 1.0', serviceType: 'Troca de óleo', serviceDate: '2021-09-15', serviceTime: '08:00', mechanicName: 'Carlos Almeida', status: 'Pendente' },
        { customerName: 'Maria Santos', vehicleModel: 'Civic 2.0', serviceType: 'Revisão de freios', serviceDate: '2021-09-15', serviceTime: '10:00', mechanicName: 'Paulo Souza', status: 'Pendente' },
        { customerName: 'José Oliveira', vehicleModel: 'Corolla 1.8', serviceType: 'Conserto de painel', serviceDate: '2021-09-15', serviceTime: '14:00', mechanicName: 'Rodrigo Santos', status: 'Pendente' },
        { customerName: 'Ana Souza', vehicleModel: 'HB20 1.6', serviceType: 'Troca de bateria', serviceDate: '2021-09-15', serviceTime: '16:00', mechanicName: 'Fernanda Oliveira', status: 'Pendente' }
    ];

    tieredItems: any[];

    // Painel selecionado
    selectedPanel: string = 'customers';
    rowsPerPageOptions = [10, 20, 30];

    constructor(private appointmentService: AppointmentService, private messageService: MessageService) { }

    async ngOnInit() {
        //this.appointmentService.getAppointments().then(data => this.appointments = data);

        this.appointments = this.dataMock;

        this.cols = [
            { field: 'customerName', header: 'Cliente' },
            { field: 'vehicleModel', header: 'Carro' },
            { field: 'serviceType', header: 'Serviço' },
            { field: 'serviceDate', header: 'Data' },
            { field: 'serviceTime', header: 'Horário' },
            { field: 'mechanicName', header: 'Mecânico' },
            { field: 'status', header: 'Status' }
        ];

        this.tieredItems = [
            {
                label: 'Tabela',
                command: () => {
                    this.selectedPanel = 'customers';
                }
            },
            {
                label: 'Calendario',
                command: () => {
                    this.selectedPanel = 'calendar';
                }
            },
            {
                label: 'Kanban',
                command: () => {
                    this.selectedPanel = 'kanban';
                }
            },
            // {
            //     label: 'Perfil',
            //     command: () => {
            //         this.selectedPanel = 'profile';
            //     }
            // },
            // {
            //     label: 'Sair',
            //     command: () => {
            //         this.selectedPanel = 'quit';
            //     }
            // }
        ];

}

openNew() {
    this.appointment = {};
    this.submitted = false;
    this.appointmentDialog = true;
}

deleteSelectedAppointments() {
    this.deleteAppointmentsDialog = true;
}

editAppointment(appointment: Appointment) {
    this.appointment = { ...appointment };
    this.appointmentDialog = true;
}

deleteAppointment(appointment: Appointment) {
    this.deleteAppointmentDialog = true;
    this.appointment = { ...appointment };
}

confirmDeleteSelected() {
    const ids = this.selectedAppointments.map(a => a.id!);
    this.appointmentService.deleteAppointments(ids).then(() => {
        this.appointments = this.appointments.filter(a => !ids.includes(a.id!));
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Compromissos deletados', life: 3000 });
        this.selectedAppointments = [];
        this.deleteAppointmentsDialog = false;
    });
}

confirmDelete() {
    if (this.appointment.id) {
        this.appointmentService.deleteAppointment(this.appointment.id).then(() => {
            this.appointments = this.appointments.filter(a => a.id !== this.appointment.id);
            this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Compromisso deletado', life: 3000 });
            this.appointment = {};
            this.deleteAppointmentDialog = false;
        });
    }
}

hideDialog() {
    this.appointmentDialog = false;
    this.submitted = false;
}

saveAppointment() {
    this.submitted = true;

    if (this.appointment.customerName?.trim() && this.appointment.serviceType && this.appointment.serviceDate && this.appointment.serviceTime) {
        if (this.appointment.id) {
            this.appointmentService.updateAppointment(this.appointment).then(() => {
                const index = this.appointments.findIndex(a => a.id === this.appointment.id);
                if (index !== -1) {
                    this.appointments[index] = this.appointment;
                    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Compromisso atualizado', life: 3000 });
                }
            });
        } else {
            this.appointmentService.addAppointment(this.appointment).then(() => {
                this.appointments.push(this.appointment);
                this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Compromisso criado', life: 3000 });
            });
        }

        this.appointments = [...this.appointments];
        this.appointmentDialog = false;
        this.appointment = {};
    }
}

findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.appointments.length; i++) {
        if (this.appointments[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
}
