import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marcas } from '../Model/Marcas';
import { Modelos } from '../Model/Modelos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  //Declarar variables para recursos url
urlListar='http://localhost:9000/AgenciaWS/listar';
urlGuardar='http://localhost:9000/AgenciaWS/guardar';
urlBuscar='http://localhost:9000/AgenciaWS/buscar';
urlEditar='http://localhost:9000/AgenciaWS/editar';
urlEliminar='http://localhost:9000/AgenciaWS/eliminar';
listarM(){
  return this.http.get<Marcas[]>(this.urlListar);
}

guardarM(marca:Marcas){
  return this.http.post(this.urlGuardar,marca,{responseType:'text'});
}

buscarM(marca:Marcas){
  return this.http.post<Marcas>(this.urlBuscar,marca);
}

editarM(marca:Marcas){
  return this.http.post(this.urlEditar,marca,{responseType:'text'});
}

eliminarM(marca:Marcas){
  return this.http.post(this.urlEliminar,marca,{responseType:'text'});
}

urlListarModelos='http://localhost:9000/ModelosWS/listar';
urlbuscarModelos='http://localhost:9000/ModelosWS/buscar';
urlGuardarModelos='http://localhost:9000/ModelosWS/guardar';
urlEditarModelos='http://localhost:9000/ModelosWS/editar';
urlEliminarModelo='http://localhost:9000/ModelosWS/eliminarModelo';


listarMod(){
  return this.http.get<Modelos[]>(this.urlListarModelos);
}

//mandar objetos de modelo
guardarMod(modelo:Modelos){
  return this.http.post(this.urlGuardarModelos,modelo,{responseType:'text'});
}
buscarMod(modelo:Modelos){
  return this.http.post<Modelos>(this.urlbuscarModelos,modelo);
}
editarMod(modelo:Modelos){
  return this.http.post(this.urlEditarModelos,modelo,{responseType:'text'})
}
eliminarMod(modelo:Modelos){
  return this.http.post(this.urlEliminarModelo,modelo,{responseType:"text"});
}

}


