import { Component, OnInit , Renderer2 , ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @ViewChild('parrafo',{static:true}) parrafo: ElementRef;

  mensaje: string = "Este es el hijo";
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  saludo(value) {
    this.mensaje = value;
    //cambio el color del parrafo
    this.renderer.addClass(this.parrafo.nativeElement,'colorTextoOriginal');
  }
}
