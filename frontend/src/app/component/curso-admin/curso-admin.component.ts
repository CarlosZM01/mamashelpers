import { Component, OnInit } from '@angular/core';

import { CursosService } from '../../services/cursos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso-admin',
  templateUrl: './curso-admin.component.html',
  styleUrls: ['./curso-admin.component.css']
})
export class CursoAdminComponent implements OnInit {

  cursos: any = [];

  constructor( private cursosService: CursosService ) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(){
    this.cursosService.getCursos().subscribe(
      res => {
        this.cursos = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }

  deleteCurso( id: string ) {

    Swal.fire({
      title: '¿Eliminar registro?',
      text: `Se eliminara el curso completo`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
      }).then( resp => {

        if ( resp.value ) {

          this.cursosService.deleteCurso(id).subscribe(
            res => {
              console.log(res)
              this.getCursos();
            },
            err => console.log(err)
          )
          Swal.fire({
            // title: `${ curso.nombre }`,
            text: 'Datos eliminados',
            icon: 'success'
          });

          this.getCursos();
        }
        
      });

  }



}
