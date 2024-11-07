import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoruselComponent } from './Componentes/corusel/corusel.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarModelosComponent } from './Componentes/listar-modelos/listar-modelos.component';
import { GuardarModeloComponent } from './Componentes/guardar-modelo/guardar-modelo.component';
import { EditarModeloComponent } from './Componentes/editar-modelo/editar-modelo.component';
@NgModule({
  declarations: [
    AppComponent,
    CoruselComponent,
    ListarComponent,
    GuardarComponent,
    EditarComponent,
    EliminarComponent,
    ListarModelosComponent,
    GuardarModeloComponent,
    EditarModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
