import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { User, Usuario } from '../models/Usuario';
import { BehaviorSubject, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  API_URL = 'http://localhost:3000/api/login';

  constructor( private http: HttpClient) { 
    // this.checkToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  //  const helper = new JwtHelperService();

    login(authData:User): Observable < Usuario | void > {
      return this.http.post<Usuario>(`${this.API_URL}`, authData)

      .pipe(map(( res:Usuario) => {
        console.log('Respuesta: ', res);
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
      );
    }

    logout(): void {
      localStorage.removeItem('token');
      this.loggedIn.next(false);
    }

    // private checkToken(): void {
    //   const userToken = localStorage.getItem('token');
    //   const isExpired = helper.isTokenExpired(userToken);
    //   console.log('Expirado: ', isExpired);
    //   isExpired ? this.logout() : this.loggedIn.next(true);
    // }
    
    private saveToken(token:string): void {
      localStorage.setItem('token', token);
    }

    private handlerError(err): Observable<never> {
    let errorMessage = "Ocurrio un error";
      if (err) {
        errorMessage = `Error code: ${err.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }

}
