import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-listar-modelos',
  templateUrl: './listar-modelos.component.html',
  styleUrls: ['./listar-modelos.component.css']
})
export class ListarModelosComponent {

  //inyeccion
  constructor(private router: Router, private servicios:ServiceService){}
  listarModelos:Modelos[];


  ngOnInit(){
    this.servicios.listarMod().subscribe(data=>{
      this.listarModelos=data;
    })
  }

  //Componente editar: 
  abrirCompEditarMod(modelo:Modelos){
    localStorage.setItem("id",modelo.id.toString());
    this.router.navigate(["editarModelo"]);
  }
  abrirCompEliminar(modelo:Modelos){
    var r = confirm("¿Esta seguro de eliminar este registro?")
    if(r==true){
      this.servicios.eliminarMod(modelo).subscribe(data=>{
        this.ngOnInit();
      })
    }
  }


}
