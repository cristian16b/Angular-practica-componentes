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
    // referencia de los mensajes emergentes
    // https://www.npmjs.com/package/ngx-toastr
    this.toastr.success('succes!', 'Toastr fun!',{
      closeButton: true
    });
    this.toastr.info('info!', 'Toastr fun!',{
      closeButton: true
    });
    this.toastr.warning('warning!', 'Toastr fun!',{
      closeButton: true
    });
    this.toastr.show('shor!', 'Toastr fun!',{
      closeButton: true
    });
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000
    });
  }
} 
