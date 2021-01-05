import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  usuarios: any = [];

  constructor( private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
        console.log(res)
      },
      err => console.error(err)
    );
  }

  deleteUsuario( id: string ) {
    
    Swal.fire({
      title: '¿Eliminar registro?',
      text: `Se eliminara el usuario`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
      }).then( resp => {

        if ( resp.value ) {

          this.usuariosService.deleteUsuario(id).subscribe(
            res => {
              console.log(res)
              this.getUsuarios();
            },
            err => console.log(err)
          )
          Swal.fire({
            title: `Eliminado`,
            text: 'Usuario eliminado',
            icon: 'success'
          });

          this.getUsuarios();
        }
        
      });
  }

}
