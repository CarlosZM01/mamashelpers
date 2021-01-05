import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { CursoFormComponent } from './component/curso-form/curso-form.component';
import { CursoListComponent } from './component/curso-list/curso-list.component';
import { CursoVistaComponent } from './component/curso-vista/curso-vista.component';

import { CursosService} from './services/cursos.service';
import { CursoAdminComponent } from './component/curso-admin/curso-admin.component';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosListComponent } from './component/usuarios-list/usuarios-list.component';
import { UsuarioFormComponent } from './component/usuario-form/usuario-form.component';
import { LoginComponent } from './component/login/login.component';
import { CitaFormComponent } from './component/cita-form/cita-form.component';
import { CitaListComponent } from './component/cita-list/cita-list.component';
import { CitasService } from './services/citas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CursoFormComponent,
    CursoListComponent,
    CursoVistaComponent,
    CursoAdminComponent,
    UsuariosListComponent,
    UsuarioFormComponent,
    LoginComponent,
    CitaFormComponent,
    CitaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CursosService,
    UsuariosService,
    CitasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
