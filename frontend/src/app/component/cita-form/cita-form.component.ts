import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { Especialista } from 'src/app/models/Especialista';
import { ActivatedRoute, Router } from '@angular/router';

import { CitasService } from '../../services/citas.service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { EspecialistasService } from 'src/app/services/especialistas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.css']
})
export class CitaFormComponent implements OnInit {

  cita: Cita = {
    id: 0,
    especialista: '',
    objetivo: '',
    email: '',
    nombre: '',
    edad: 0,
    peso: 0,
    talla: 0,
    dia: null,
    hora: null,
  }

  especialista: Especialista = {
    id: 0,
    nombre: '',
    correo: '',
    especialidad: ''
  }

  forma: FormGroup;

  constructor( private citasService: CitasService,
    private especialistasService: EspecialistasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
    ) {
     this.crearFormulario();
    //  this.getDatosCurso();
     }

     ngOnInit(): void {
      this.especialistasService.getEspecialistas()
      .subscribe(
        res => {
          // console.log(res);
          this.especialista = res;
      },
      err => console.log(err)
      )      
    }

    get especialistaNoValido() {
      return this.forma.get('especialista').invalid && this.forma.get('especialista').touched
    }

    get objetivoNoValido() {
      return this.forma.get('objetivo').invalid && this.forma.get('objetivo').touched
    }

    get emailNoValido() {
      return this.forma.get('email').invalid && this.forma.get('email').touched
    }

    get nombreNoValido() {
      return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
    }

    get edadNoValido() {
      return this.forma.get('edad').invalid && this.forma.get('edad').touched
    }

    get pesoNoValido() {
      return this.forma.get('peso').invalid && this.forma.get('peso').touched
    }

    get tallaNoValido() {
      return this.forma.get('talla').invalid && this.forma.get('talla').touched
    }

    get diaNoValido() {
      return this.forma.get('dia').invalid && this.forma.get('dia').touched
    }

    get horaNoValido() {
      return this.forma.get('hora').invalid && this.forma.get('hora').touched
    }

    crearFormulario() {
      this.forma = this.fb.group({
        especialista: ['', Validators.required],
        objetivo    : ['', Validators.required],
        email    : ['', Validators.required],
        nombre      : ['', [Validators.required, Validators.minLength(3)]],
        edad    : ['', Validators.required],
        peso   : ['', Validators.required],
        talla    : ['', Validators.required],
        dia    : ['', Validators.required],
        hora : ['', Validators.required],
      });
    }

    crearCita() {
  
      console.log( this.forma );
  
      if ( this.forma.invalid ) {
        return Object.values( this.forma.controls ).forEach( control => {
          if ( control instanceof FormGroup ) {
            Object.values( control.controls ).forEach ( control =>  control.markAsTouched() );
          } else {
          control.markAsTouched();
        }
      });
      } else {
        console.log(this.cita);
        this.citasService.saveCita(this.cita)
        .subscribe(
          res => {
            console.log(res);
            Swal.fire({
              title: `Datos enviados`,
              text: 'Cita creada',
              icon: 'success'
            });
            this.router.navigate(['/citas']);
          },
          err => console.log(err)
        )
      }
      
    }

}


