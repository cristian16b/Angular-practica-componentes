import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appweb';
  //prueba de pasar datos del componente padre app
  //al componente hijo(en este caso el body)
  datos: any = { nombre: "Cristian",apellido: "Budzicz",edad: "29"};

  eventoBoton () {
    console.log(this.datos);
  }
} 
