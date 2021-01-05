import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: User = {
    email: '',
    password: ''
  };

  forma: FormGroup;

  constructor( private authService: AuthService,
               private fb: FormBuilder,
               private router: Router
             ) {
                this.crearFormulario();
              }

  // loginForm = this.fb.group({
  //   email:[''],
  //   password:[''],
  // });

  ngOnInit() {
  }

  get emailNoValido() {
    return this.forma.get('email').invalid && this.forma.get('email').touched
  }

  get passwordNoValido() {
    return this.forma.get('password').invalid && this.forma.get('password').touched
  }

  crearFormulario() {
    this.forma = this.fb.group({
      email      : ['', Validators.required],
      password   : ['', Validators.required],
    });
  }


  onLogin(): void {
    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach ( control =>  control.markAsTouched() );
        } else {
        control.markAsTouched();
      }
    });
    }
    // const formValue = this.loginForm.value;

    this.authService.login(this.usuario)
    .subscribe(
      res => {
      if (res) {
        console.log(res)
        this.router.navigate(['/cursos']);
      }
    },
    err => console.log(err),
    )
  }

}
