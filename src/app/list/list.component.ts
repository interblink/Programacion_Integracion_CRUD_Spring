import { Component, OnInit } from '@angular/core';
import { SeviceListService } from './sevice-list.service';
import { UserList } from './user-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  usuarios: UserList[] = [];

  constructor(private usuarioService: SeviceListService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe((response: UserList[]) => {
      this.usuarios = response;
     
      if (Array.isArray(response)) {
        this.usuarios = response;
      } else {
        this.usuarios = [response]; // Ajusta según sea necesario
      }
    }, error => {
      console.error('Error al obtener los datos', error);
    });
  }

}
