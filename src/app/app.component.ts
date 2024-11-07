import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronSistAutos';

  //Constructor
  constructor(private router:Router){}

  //Declarar un procedimiento para la navegacion al componente de listar
  abrirCompListar(){
    this.router.navigate(["listar"]);
  }

  abrirCompGuardar(){
    this.router.navigate(["guardar"]);
  }
  abrirCompListarModelo(){
    this.router.navigate(["lisModelos"]);
  }
  abrirCompGuardarModelo(){
    this.router.navigate(["guardarModelo"]);
  }
  
}
