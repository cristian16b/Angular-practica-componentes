import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mensaje: string;

  //defino decorador para vincular padre->hijo
  @Input("propiedadHijo")datosHijo: any;

  constructor() {
    this.mensaje = 'estoy en el body';
   }

  ngOnInit() {
  }

}
