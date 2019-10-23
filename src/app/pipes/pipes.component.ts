import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  informacion: any = [
    {sueldo:120.8999,nombre:'cristian',apellido:'Budzicz'},
    {sueldo:13.3,nombre:'gonzalo',apellido:'Juarez'},
    {sueldo:100.123,nombre:'perez',apellido:'pedro'}
];

  porcentaje: number = 0.89;

  dinero: number = 12.30;

  constructor() { }

  ngOnInit() {
  }

}
