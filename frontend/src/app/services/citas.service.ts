import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../models/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCitas() {
    return this.http.get(`${this.API_URL}/citas`);
  }

  getCita( id:string ) {
    return this.http.get(`${this.API_URL}/citas/${id}`);
  }

  saveCita( cita:Cita ) {
    return this.http.post(`${this.API_URL}/citas`, cita);
  }

  updateCita( id:string|number, updatedCita:Cita){
    return this.http.put(`${this.API_URL}/citas/${id}`, updatedCita);
  }

  deleteCita( id:string ) {
    return this.http.delete(`${this.API_URL}/citas/${id}`);
  }

}
