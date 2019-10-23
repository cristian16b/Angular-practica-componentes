import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarApellidoNombre'
})
export class PruebapipePipe implements PipeTransform {

  transform(apellido: string,nombre: string): string {
    return `Apellido: ${apellido} Nombre: ${nombre}`;
  }

}
