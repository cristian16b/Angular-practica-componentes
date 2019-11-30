import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {share} from 'rxjs/operators'
import { map } from 'rxjs/operators'
import {Idata} from '../tmp';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  obtenerPersonas():Observable<Idata[]> {
    // return this.http.get<Idata[]>('https://my-json-server.typicode.com/cristian16b/Angular-practica-componentes/db').pipe(share());
    return this.http.get<Idata[]>('http://scratchya.com.ar/vue/datos.php').pipe(share());
  }
}

// referencias
// https://codeday.me/es/qa/20190610/844542.html
// 