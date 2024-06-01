import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css']
})
export class ConsumoApiComponent {

  movies: ConsumoApiComponent[] = []; // Inicializa movies como un array vacío



  constructor(private movieService: ServiceService) { }

  ngOnInit(): void {

  console.log(this.movies)
    this.movieService.getApi_service().subscribe(movies => {
      // Si deseas crear un nuevo array de películas,
      // puedes hacerlo asignándole los datos recibidos del servicio
      // Si solo quieres agregarlos al array existente, puedes usar concat o push
      // Por ejemplo, para crear un nuevo array:
      // this.movies = movies;
      
      // Si quieres agregarlos al array existente:
      this.movies = this.movies.concat(movies);
    });
  }


}
