import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService) {}

  eventoBoton () {
    console.log(this.datos);
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
} 
