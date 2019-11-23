import {  Component,OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';
import {Idata} from '../tmp';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consumir-rest',
  templateUrl: './consumir-rest.component.html',
  styleUrls: ['./consumir-rest.component.css']
})

export class ConsumirRestComponent implements OnInit {

  // cuando se usa con subscribe a un servicio
  // private personas:Array<Idata>=[];

  // cuando se usa con pipe async
  // private personas:Observable<Idata>;
  private personas:Observable<Idata[]>;
  constructor(private listaPersonas:PersonaService) { 
    this.obtenerPersonas();
  }

  ngOnInit() {
    //  this.personas=this.listaPersonas.obtenerPersonas();
  }
  
  obtenerPersonas(){
    // this.listaPersonas.obtenerPersonas().subscribe(
    //   resultado => 
    //     {
    //       this.personas = resultado;
    //       // console.log(this.personas.name);
    //       // console.log([this.personas,this.personas]);
    //     },
    //     error => 
    //     {
    //       console.log(JSON.stringify(error));
    //     }
    // );
    this.personas = this.listaPersonas.obtenerPersonas();
    console.log(this.personas);
  }
}

/*
https://codeday.me/es/qa/20190610/844542.html
*/

// esta generando el siguiente error
// 