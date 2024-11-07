import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Model/Marcas';
import { Modelos } from 'src/app/Model/Modelos';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-guardar-modelo',
  templateUrl: './guardar-modelo.component.html',
  styleUrls: ['./guardar-modelo.component.css']
})
export class GuardarModeloComponent {
  //Constructor
  constructor(private router: Router, private servicio: ServiceService) { }

  //para seleccionar las marcar al momento de querer guardar los modelos
  listaMarcas: Marcas[];

  ngOnInit() {
    this.servicio.listarM().subscribe(data => {
      this.listaMarcas = data;
    })
  }

  //variables de tipo objeto
  modelo: Modelos = new Modelos();
  marca: Marcas = new Marcas();

    //Se invoca al momento de darle click
    //met para guardar
    guardar() {
            //formar nuestro registro JSON
      //variable
      const registroData: Modelos = {
        id: this.modelo.id,
        nombre: this.modelo.nombre,
        tipo: this.modelo.tipo,
        precio: this.modelo.precio,
        fechaLanz: this.modelo.fechaLanz,
        marca: {
          id: this.marca.id,
          nombre: '',
          origen: '',
          eslogan: ''
        }

      }
      //imprimir en consola el registro
      console.log(JSON.stringify(registroData));
      
      this.servicio.guardarMod(registroData).subscribe(data =>{
        this.router.navigate(["lisModelos"]);
      })



    }
}
