import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  obtenerPersonas():Observable<any> {
    return this.http.get('https://uinames.com/api/');
  }

}
