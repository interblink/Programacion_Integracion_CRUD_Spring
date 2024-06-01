import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Cotizacion, InterfaceConsumoApi } from './interface-consumo-api';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css']
})
export class ConsumoApiComponent {
  
  data: InterfaceConsumoApi[] = []; 

  constructor(private apiService: ServiceService) { }

  ngOnInit(): void {
    this.apiService.getApi_service().subscribe((response: InterfaceConsumoApi[]) => {
      this.data = response;
     
      if (Array.isArray(response)) {
        this.data = response;
      } else {
        this.data = [response]; // Ajusta según sea necesario
      }
    }, error => {
      console.error('Error al obtener los datos', error);
    });
  }




}
