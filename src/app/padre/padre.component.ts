import { Component, OnInit , ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  @ViewChild(HijoComponent,{static:true}) hijo: HijoComponent;

  constructor() { }

  ngOnInit() {
  }

  //
  enviarMensaje() {
    this.hijo.saludo('soy el padre');
  }

}
