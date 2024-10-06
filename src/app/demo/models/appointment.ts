export interface Appointment {
    id?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    serviceAddress?: string;
    vehicleBrand?: string;
    vehicleModel?: string;
    vehicleYear?: number;
    serviceType?: string;
    serviceDescription?: string;
    serviceDate?: Date;
    serviceTime?: string; // Formato "HH:MM - HH:MM"
    mechanicName?: string;
    status?: string; // Ex: Pendente, Confirmado, Concluído, Cancelado
    estimatedValue?: number;
}
