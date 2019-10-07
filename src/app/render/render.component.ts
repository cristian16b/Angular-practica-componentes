import { Component, OnInit , Renderer2 , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  //
  @ViewChild('miparrafo',{static: false}) parrafo: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  
  // al clickear sobre el parrafo, se le cambia el color
  cambiarColor(elemento:HTMLElement) {
    this.renderer.addClass(elemento, 'colorTextoModificado');
  }

  // al clickear sobre el boton, se retorna al color original del parrafo 
  retornarColor() {
    // console.log('evento');
    this.renderer.removeClass(this.parrafo.nativeElement,'colorTextoModificado');
    this.renderer.addClass(this.parrafo.nativeElement,'colorTextoOriginal');
  }
}
