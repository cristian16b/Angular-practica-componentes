import {  Component,OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
import {Idata} from '../tmp';

@Component({
  selector: 'app-consumir-rest',
  templateUrl: './consumir-rest.component.html',
  styleUrls: ['./consumir-rest.component.css']
})

export class ConsumirRestComponent implements OnInit {

  private personas:Array<Idata[]> = [];
  constructor(private listaPersonas:PersonaService) { 
    this.obtenerPersonas();
  }

  ngOnInit() {
  }
  
  obtenerPersonas(){
    this.listaPersonas.obtenerPersonas().subscribe(
      resultado => 
        {
          this.personas = resultado;
          console.log(this.personas);
        },
        error => 
        {
          console.log(JSON.stringify(error));
        }
    );
  }
}

/*
https://codeday.me/es/qa/20190610/844542.html
*/
