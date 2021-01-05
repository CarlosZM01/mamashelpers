import { Component, OnInit, HostBinding } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { Especialista } from 'src/app/models/Especialista';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from '../../services/cursos.service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { EspecialistasService } from 'src/app/services/especialistas.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  curso: Curso = {
    id: 0,
    imagen: '',
    nombre: '',
    objetivo: '',
    introduccion: '',
    contenido: '',
    categoria: '',
    especialista: '',
    cantidad: 0,
    duracion: '',
    descripcion: '',
    precio: 0,
    vid1: '',
    url1: '',
    vid2: '',
    url2: '',
    vid3: '',
    url3: '',
    vid4: '',
    url4: '',
    vid5: '',
    url5: '',
    vid6: '',
    url6: '',
    vid7: '',
    url7: '',
    vid8: '',
    url8: '',
    vid9: '',
    url9: '',
    vid10: '',
    url10: '',
    creacion: new Date()
  };
  
  edit: boolean = false;

  especialista: Especialista = {
    id: 0,
    nombre: '',
    correo: '',
    especialidad: ''
  }

  forma: FormGroup;

  constructor( private cursosService: CursosService,
               private especialistasService: EspecialistasService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private fb: FormBuilder
               ) {
                this.crearFormulario();
                this.getDatosCurso();
                }

  ngOnInit(): void {

    console.log(this.forma);

    this.especialistasService.getEspecialistas()
    .subscribe(
      res => {
        // console.log(res);
        this.especialista = res;
    },
    err => console.log(err)
    )

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.cursosService.getCurso(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.curso = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
    
  }

  get videos() {
    return this.forma.get('videos') as FormArray;
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get imagenNoValido() {
    return this.forma.get('imagen').invalid && this.forma.get('imagen').touched
  }

  get categoriaNoValido() {
    return this.forma.get('categoria').invalid && this.forma.get('categoria').touched
  }

  get objetivoNoValido() {
    return this.forma.get('objetivo').invalid && this.forma.get('objetivo').touched
  }

  get introduccionNoValido() {
    return this.forma.get('introduccion').invalid && this.forma.get('introduccion').touched
  }

  get contenidoNoValido() {
    return this.forma.get('contenido').invalid && this.forma.get('contenido').touched
  }

  get especialistaNoValido() {
    return this.forma.get('especialista').invalid && this.forma.get('especialista').touched
  }

  get cantidadNoValido() {
    return this.forma.get('cantidad').invalid && this.forma.get('cantidad').touched
  }

  get duracionNoValido() {
    return this.forma.get('duracion').invalid && this.forma.get('duracion').touched
  }

  get descripcionNoValido() {
    return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched
  }

  get precioNoValido() {
    return this.forma.get('precio').invalid && this.forma.get('precio').touched
  }

  get tituloNoValido() {
    return this.forma.get('video.titulo').invalid && this.forma.get('video.titulo').touched
  }

  get urlNoValido() {
    return this.forma.get('video.url').invalid && this.forma.get('video.url').touched
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre      : ['', [Validators.required, Validators.minLength(3)]],
      imagen      : ['', Validators.required],
      objetivo    : ['', Validators.required],
      introduccion: ['', Validators.required],
      contenido   : ['', Validators.required],
      categoria   : ['', Validators.required],
      especialista: ['', Validators.required],
      cantidad    : ['', Validators.required],
      duracion    : ['', Validators.required],
      descripcion : ['', Validators.required],
      precio      : ['', Validators.required],
      // video       : this.fb.group ({
      //   titulo    : ['', Validators.required],
      //   url       : ['', Validators.required],
      // }),
      // videos: this.fb.array([])
      vid1: '',
      url1: '',
      vid2: '',
      url2: '',
      vid3: '',
      url3: '',
      vid4: '',
      url4: '',
      vid5: '',
      url5: '',
      vid6: '',
      url6: '',
      vid7: '',
      url7: '',
      vid8: '',
      url8: '',
      vid9: '',
      url9: '',
      vid10: '',
      url10: '',
    });
  }

  getDatosCurso() {
    this.forma.reset({
      nombre: '',
      imagen: '',
      objetivo: '',
      introduccion: '',
      contenido: '',
      categoria: '',
      especialista: '',
      cantidad: '',
      duracion: '',
      descripcion: '',
      precio: '',
      // video: {
      //   titulo: '',
      //   url: ''
      // }
      vid1: '',
      url1: '',
      vid2: '',
      url2: '',
      vid3: '',
      url3: '',
      vid4: '',
      url4: '',
      vid5: '',
      url5: '',
      vid6: '',
      url6: '',
      vid7: '',
      url7: '',
      vid8: '',
      url8: '',
      vid9: '',
      url9: '',
      vid10: '',
      url10: '',
    });
  }

  agregarVideo() {
    this.videos.push( this.fb.control('', Validators.required));
  }

  borrarVideo( i: number ) {
    this.videos.removeAt(i);
  }

  guardarCurso() {
    delete this.curso.creacion;
    delete this.curso.id;

    console.log( this.forma );

    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach ( control =>  control.markAsTouched() );
        } else {
        control.markAsTouched();
      }
    });
    }

    console.log(this.curso);
    this.cursosService.saveCurso(this.curso)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin_cursos']);
      },
      err => console.log(err)
    )
  }

  updateCurso() {
    delete this.curso.creacion;
    this.cursosService.updateCurso(this.curso.id, this.curso)
    .subscribe(
      res => {
        this.router.navigate(['/admin_cursos']);
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
