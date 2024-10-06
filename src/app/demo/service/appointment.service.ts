import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    private appointments: Appointment[] = [];

    constructor() { }

    getAppointments(): Promise<Appointment[]> {
        // Aqui você pode substituir por uma chamada HTTP real
        return Promise.resolve(this.appointments);
    }

    addAppointment(appointment: Appointment): Promise<void> {
        appointment.id = this.createId();
        this.appointments.push(appointment);
        return Promise.resolve();
    }

    updateAppointment(appointment: Appointment): Promise<void> {
        const index = this.appointments.findIndex(a => a.id === appointment.id);
        if (index !== -1) {
            this.appointments[index] = appointment;
        }
        return Promise.resolve();
    }

    deleteAppointment(id: string): Promise<void> {
        this.appointments = this.appointments.filter(a => a.id !== id);
        return Promise.resolve();
    }

    deleteAppointments(ids: string[]): Promise<void> {
        this.appointments = this.appointments.filter(a => !ids.includes(a.id!));
        return Promise.resolve();
    }

    private createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
