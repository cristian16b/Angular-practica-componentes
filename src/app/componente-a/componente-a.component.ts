import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  id: string = '';
  constructor(private rutaActiva: ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe( params => {
      if(params['id']){
        // console.log('llego');
        this.id = params['id'];
      }
    }
    );
  }

}
