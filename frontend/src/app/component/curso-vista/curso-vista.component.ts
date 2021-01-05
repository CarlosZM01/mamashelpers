import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-vista',
  templateUrl: './curso-vista.component.html',
  styleUrls: ['./curso-vista.component.css']
})
export class CursoVistaComponent implements OnInit {

  curso: Curso = {};
  videoactual: String;

  constructor( private cursosService: CursosService,
               private activatedRoute: ActivatedRoute
               ) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.cursosService.getCurso(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.curso = res;
        },
        err => console.log(err)
      )
    }

    this.videoactual = this.curso.url1;
    
  }

  setVideo(videoUrl) {
    this.videoactual = videoUrl;
  }

}
