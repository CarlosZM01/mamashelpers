import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecialistasService {

  API_URL = 'http://localhost:3000/api';

  constructor( private http: HttpClient ) { }

  getEspecialistas() {
    return this.http.get(`${this.API_URL}/especialistas`);
  }

}
