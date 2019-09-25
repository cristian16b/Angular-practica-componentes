import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mensaje: string;

  constructor() {
    this.mensaje = 'estoy en el body';
   }

  ngOnInit() {
  }

}
