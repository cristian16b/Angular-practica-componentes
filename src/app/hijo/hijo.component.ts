import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  mensaje: string = "Este es el hijo";
  constructor() { }

  ngOnInit() {
  }

  saludo(value) {
    this.mensaje = value;
  }
}
