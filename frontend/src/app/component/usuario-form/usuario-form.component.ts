import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario = {
    email: '',
    nombre: '',
    apellidop: '',
    apellidom: '',
    ciudad: '',
    password: '',
    role: 'USUARIO'
  };

  edit: boolean = false;

  forma: FormGroup;

  constructor( private usuariosService: UsuariosService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute    
    ) { 
      this.crearFormulario();
    }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.usuariosService.getUsuario(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.usuario = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }

  }

  get emailNoValido() {
    return this.forma.get('email').invalid && this.forma.get('email').touched
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get apellidopNoValido() {
    return this.forma.get('apellidop').invalid && this.forma.get('apellidop').touched
  }

  get objetivoNoValido() {
    return this.forma.get('objetivo').invalid && this.forma.get('objetivo').touched
  }

  get apellidomNoValido() {
    return this.forma.get('apellidom').invalid && this.forma.get('apellidom').touched
  }

  get ciudadNoValido() {
    return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched
  }

  get passwordNoValido() {
    return this.forma.get('password').invalid && this.forma.get('password').touched
  }

  crearFormulario() {
    this.forma = this.fb.group({
      email      : ['', Validators.required],
      nombre     : ['', Validators.required],
      apellidop  : ['', Validators.required],
      apellidom  : ['', Validators.required],
      ciudad     : ['', Validators.required],
      password   : ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  Registrar(){
    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach ( control =>  control.markAsTouched() );
        } else {
        control.markAsTouched();
      }
    });
    }

    this.usuariosService.registrarUsuario(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => console.log(err),
    )
  }
  
  updateUsuario() {
    this.usuariosService.updateUsuario(this.usuario.id, this.usuario)
    .subscribe(
      res => {
        this.router.navigate(['/usuarios']);
        console.log(res);
      },
      err => console.log(err)
    )
  }

}