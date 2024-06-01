import { Injectable } from '@angular/core';
import { ConsumoApiComponent } from './consumo-api.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InterfaceConsumoApi } from './interface-consumo-api';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://www.virtutienda.com/json_consumo_RestFull/cotizaciondolarhoy.json'; // La URL de tu API
  
  constructor(private http: HttpClient) { }


//Obteniendo el array y asignando los tipo de datos de la Interface
getApi_service():Observable<InterfaceConsumoApi[]>{
  return this.http.get<InterfaceConsumoApi[]>(this.apiUrl);
}
/*
getApi_service(): Es el nombre del método. 
Observable<IntefaceConsumoApi[]>: El método devuelve un Observable que emite un array de objetos de tipo IntefaceConsumoApi.
.get<IntefaceConsumoApi[]>(): get es un método de HttpClient para realizar una solicitud HTTP GET.
<IntefaceConsumoApi[]>: Especifica el tipo de datos que se espera recibir de la API. Aquí, se espera recibir un array de objetos de tipo IntefaceConsumoApi
*/

  
}
