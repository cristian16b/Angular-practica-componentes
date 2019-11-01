import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicio/productos.service';

@Component({
  selector: 'app-prueba-servicios',
  templateUrl: './prueba-servicios.component.html',
  styleUrls: ['./prueba-servicios.component.css']
})
export class PruebaServiciosComponent implements OnInit {

  productos: any;
  constructor(private productosLista:ProductosService) { 
    this.productos = productosLista.productos.rows;
  }

  ngOnInit() {
  }

}
