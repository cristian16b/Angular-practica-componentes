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
  @ViewChild('divLista',{static: false}) divLista: ElementRef;
  constructor(private renderer: Renderer2) { }
  // variable contador que cuenta cuantas veces se presiono el boton <Cambiar de color>
  contador : number;

  ngOnInit() {
    this.contador = 0;
  }
  
  // al clickear sobre el parrafo, se le cambia el color
  cambiarColor(elemento:HTMLElement) {
    this.renderer.addClass(elemento, 'colorTextoModificado');
    // vamos a bloquear el boton <no hago nada>
    // todo solo funciona la primera vez
    this.renderer.setAttribute(this.botonNoHaceNada.nativeElement, "disabled", "true");
    // creo otro elemento del tipo input
    let li = this.renderer.createElement('li');
    let span = this.renderer.createElement('span');
    let text = this.renderer.createText(`Se apreto el boton ${this.contador} veces`);
    this.renderer.appendChild(span, text);
    this.renderer.appendChild(li, span);
    this.renderer.appendChild(this.divLista.nativeElement,li);
    // this.renderer.appendChild(this.li.nativeElement,li);
    // this.renderer.appendChild(this.li.nativeElement,this.renderer.createText('cambio texto'))
    //actualizo el contador
    this.contador = this.contador + 1;
  }

  // al clickear sobre el boton, se retorna al color original del parrafo 
  retornarColor() {
    // console.log('evento');
    this.renderer.removeClass(this.parrafo.nativeElement,'colorTextoModificado');
    this.renderer.addClass(this.parrafo.nativeElement,'colorTextoOriginal');
    // remuevo el disabled y agrego el enabled
    this.renderer.removeAttribute(this.botonNoHaceNada.nativeElement,'disabled');
    this.renderer.setAttribute(this.botonNoHaceNada.nativeElement, "enabled", "true");
    // console.log('fin');
    this.renderer.removeAttribute(this.botonNoHaceNada.nativeElement,'value');
    this.renderer.setAttribute(this.botonNoHaceNada.nativeElement,'value','AHORA TENGO OTRO NOMBRE');
  }
  
  molestoAlert() {
    alert('soy un molesto alert y este boton no hace nada');
  }
}
