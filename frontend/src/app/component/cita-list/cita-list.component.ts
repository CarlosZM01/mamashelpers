import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cita-list',
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.css']
})
export class CitaListComponent implements OnInit {

  citas: any = [];

  constructor( private citasService: CitasService) { }

  ngOnInit(): void {
    this.getCitas();
  }

  getCitas(){
    this.citasService.getCitas().subscribe(
      res => {
        this.citas = res;
        console.log(res)
      },
      err => console.log(err)
    );
  }

  deleteCita( id: string ) {
    
    Swal.fire({
      title: '¿Eliminar registro?',
      text: `Se eliminara el registro`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
      }).then( resp => {

        if ( resp.value ) {

          this.citasService.deleteCita(id).subscribe(
            res => {
              console.log(res)
              this.getCitas();
            },
            err => console.log(err)
          )
          Swal.fire({
            title: `Eliminado`,
            text: 'Registro eliminado',
            icon: 'success'
          });

          this.getCitas();
        }
        
      });
  }

}
