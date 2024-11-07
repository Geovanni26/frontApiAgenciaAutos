import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componentes/listar/listar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';
import { ListarModelosComponent } from './Componentes/listar-modelos/listar-modelos.component';
import { GuardarModeloComponent } from './Componentes/guardar-modelo/guardar-modelo.component';
import { EditarModeloComponent } from './Componentes/editar-modelo/editar-modelo.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'guardar',component:GuardarComponent},
  {path:'editar',component:EditarComponent},
  {path:'eliminar',component:EliminarComponent},
  {path:'lisModelos',component:ListarModelosComponent},
  {path:'guardarModelo',component:GuardarModeloComponent},
  {path:'editarModelo',component:EditarModeloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
