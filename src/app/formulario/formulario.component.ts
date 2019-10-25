import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // defino el formulario
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      nombre: ['NO INFORMADO',Validators.required],
      apellido: ['NO INFORMADO',Validators.required],
      email: ['solicitar@solicitar.com',
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
        ]
      ],
    });
  }

  ngOnInit() {
  }

  onSubmit(formulario) {
    console.log(formulario);
  }

}
