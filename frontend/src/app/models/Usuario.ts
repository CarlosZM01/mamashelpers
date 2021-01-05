export type Roles = 'USUARIO' | 'ADMIN';

export interface User {
    email: string;
    password: string;
}

export interface Usuario {
    id?: number;
    email?: string;
    nombre?: string;
    apellidop?: string;
    apellidom?: string;
    ciudad?: string;
    password?: string;
    token?: string;
    role?: Roles;
}