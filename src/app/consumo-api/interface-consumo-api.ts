export interface InterfaceConsumoApi {
    Servicio: String;
    Sitio: String;
    Enlace: String;
    Cotizacion: Cotizacion[];
  }

export interface Cotizacion{
    Compra: number;
    Venta: number;
  }
  
