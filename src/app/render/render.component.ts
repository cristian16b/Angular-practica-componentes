import { Component, OnInit , Renderer2 } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  
  cambiarColor(elemento:HTMLElement) {
    this.renderer.addClass(elemento, 'colorTextoModificado');
  }
}
