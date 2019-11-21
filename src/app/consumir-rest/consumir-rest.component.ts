import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-consumir-rest',
  templateUrl: './consumir-rest.component.html',
  styleUrls: ['./consumir-rest.component.css']
})
export class ConsumirRestComponent implements OnInit {

  personas: any;
  constructor(private listaPersonas:PersonaService) { 
    this.obtenerPersonas();
  }

  ngOnInit() {
  }
  
  obtenerPersonas(){
    this.listaPersonas.obtenerPersonas().subscribe(
      resultado => 
        {
          console.log(resultado);
          this.personas = resultado;
        },
        error => 
        {
          console.log(JSON.stringify(error));
        }
    );
  }
}
