import { Injectable } from '@angular/core';
import { ConsumoApiComponent } from './consumo-api.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

   private apiUrl = 'http://localhost/clasegrupog8/cotizaciondolar.json'; // La URL de tu API

  constructor(private http: HttpClient) { }

  getApi_service(): Observable<ConsumoApiComponent[]> {
  
    return this.http.get<ConsumoApiComponent[]>(this.apiUrl);
  }
  
}
