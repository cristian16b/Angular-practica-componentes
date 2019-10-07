import { Component, OnInit , Renderer2 , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  //
  @ViewChild('miparrafo',{static: false}) parrafo: ElementRef;
  @ViewChild('botonNoHaceNada',{static: false}) botonNoHaceNada: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  
  // al clickear sobre el parrafo, se le cambia el color
  cambiarColor(elemento:HTMLElement) {
    this.renderer.addClass(elemento, 'colorTextoModificado');
    // vamos a bloquear el boton <no hago nada>
    // todo solo funciona la primera vez
    this.renderer.setAttribute(this.botonNoHaceNada.nativeElement, "disabled", "true");
  }

  // al clickear sobre el boton, se retorna al color original del parrafo 
  retornarColor() {
    // console.log('evento');
    this.renderer.removeClass(this.parrafo.nativeElement,'colorTextoModificado');
    this.renderer.addClass(this.parrafo.nativeElement,'colorTextoOriginal');
    // remuevo el disabled y agrego el enabled
    this.renderer.removeAttribute(this.botonNoHaceNada.nativeElement,'disabled');
    this.renderer.setAttribute(this.botonNoHaceNada.nativeElement, "enabled", "true");
    console.log('fin');
  }
  
  molestoAlert() {
    alert('soy un molesto alert y este boton no hace nada');
  }
}
