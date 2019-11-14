import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-consumir-rest',
  templateUrl: './consumir-rest.component.html',
  styleUrls: ['./consumir-rest.component.css']
})
export class ConsumirRestComponent implements OnInit {

  personas: any = [];
  constructor(private listaPersonas:PersonaService) { }

  ngOnInit() {
    this.personas = this.listaPersonas.obtenerPersonas();
  }
}
