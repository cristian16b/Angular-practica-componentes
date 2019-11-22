import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Idata} from '../tmp';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  obtenerPersonas():Observable<Idata[]> {
    return this.http.get<Idata[]>('https://uinames.com/api/');
  }

}
