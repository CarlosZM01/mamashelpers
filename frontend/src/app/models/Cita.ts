import { Time } from '@angular/common';

export interface Cita {
    id?: number;
    especialista?: string;
    objetivo?: string;
    email?: string;
    nombre?: string;
    edad?: number;
    peso?: number;
    talla?: number;
    dia?: Date;
    hora?: Time;
}