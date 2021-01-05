import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URL = 'http://localhost:3000/api';

  constructor( private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.API_URL}/usuarios`);
  }

  getUsuario( id:string ) {
    return this.http.get(`${this.API_URL}/usuarios/${id}`);
  }

  registrarUsuario( usuario:Usuario ) {
    return this.http.post(`${this.API_URL}/usuarios`, usuario);
  }

  updateUsuario( id:string|number, updatedUsuario:Usuario){
    return this.http.put(`${this.API_URL}/usuarios/${id}`, updatedUsuario);
  }

  deleteUsuario( id:string ) {
    return this.http.delete(`${this.API_URL}/usuarios/${id}`);
  }

  //AGREGADO
  login(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, user);
  }

  //AGREGADO
  registrar(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/registro`, user);
  }
  
}