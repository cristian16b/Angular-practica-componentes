import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo: string;
  datos : any;

  constructor() { 
    this.titulo = 'soy un titulo o algo asi';
    this.datos = {'nombre': 'cristian','edad':29}
  }

  ngOnInit() {
  }

}
