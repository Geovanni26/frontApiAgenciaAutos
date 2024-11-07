import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  constructor(private router:Router, private servicio:ServiceService){}

listasMarcas:Marcas[];

ngOnInit():void{

  this.servicio.listarM().subscribe(data=>{
    console.log(data);
    this.listasMarcas=data;
  })
}

//enviar id y mostrar componente para editar
abrirCompEditar(marca:Marcas){
  localStorage.setItem("id",marca.id.toString());
  this.router.navigate(["editar"]);
}

abrirCompEliminar(marca:Marcas){
  localStorage.setItem("id",marca.id.toString());
  this.router.navigate(["eliminar"]);
}
}
