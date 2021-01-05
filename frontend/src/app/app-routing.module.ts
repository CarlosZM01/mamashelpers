import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioFormComponent } from './component/usuario-form/usuario-form.component';
import { LoginComponent } from './component/login/login.component';
import { CursoListComponent} from './component/curso-list/curso-list.component';
import { CursoFormComponent } from './component/curso-form/curso-form.component';
import { CursoVistaComponent } from './component/curso-vista/curso-vista.component';
import { CursoAdminComponent } from './component/curso-admin/curso-admin.component';
import { UsuariosListComponent} from './component/usuarios-list/usuarios-list.component';
import { CitaFormComponent} from './component/cita-form/cita-form.component';
import { CitaListComponent} from './component/cita-list/cita-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/cursos', pathMatch: 'full' },
  { path: 'registro', component: UsuarioFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosListComponent },
  { path: 'usuarios/edit/:id', component: UsuarioFormComponent },
  { path: 'cursos', component: CursoListComponent },
  { path: 'cursos/add', component: CursoFormComponent },
  { path: 'cursos/edit/:id', component: CursoFormComponent },
  { path: 'cursos/view/:id', component: CursoVistaComponent },
  { path: 'admin_cursos', component: CursoAdminComponent },
  { path: 'citas/add', component: CitaFormComponent },
  { path: 'citas', component: CitaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
