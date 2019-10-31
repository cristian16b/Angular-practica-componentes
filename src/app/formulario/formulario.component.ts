import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // defino el formulario
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nombre: ['',[
        Validators.required,
        Validators.minLength(3)
      ]],
      apellido: ['',Validators.required],
      correo: ['',
        [
          Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$'),
          Validators.required
        ]],
      }
    );
  }

  onSubmit(formulario) {
    console.log(formulario);
    alert('se mando');
  }

}
