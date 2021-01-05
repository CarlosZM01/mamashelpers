import { Component, OnInit, HostBinding } from '@angular/core';

import { CursosService } from '../../services/cursos.service';
import { Curso } from 'src/app/models/Curso';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  cursos: any = [];

  constructor( private cursosService: CursosService) { }

  ngOnInit() {
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

}
