import { Component, OnInit } from '@angular/core';
import { Usertipo, Usuario } from './usuario';

@Component({
  selector: 'app-interface-enum',
  templateUrl: './interface-enum.component.html',
  styleUrls: ['./interface-enum.component.css']
})
export class InterfaceEnumComponent {

  constructor(){}

 OnInit(){

 }

 /*user:Usuario={
  ID:109424087,
  Nombre:"johann",
  Apellido:"latorre",
  Nick:"interblink",
  Email:"johan3@sergio.com",
  Password:"123456",
  Tipo_user: Usertipo.Cliente
 }*/

 user: Usuario=<Usuario>{

  ID:109424087,
  Nombre:"johann",
  Apellido:"latorre",
  Nick:"interblink",
  Email:"johan3@sergio.com",
  Password:"123456",
  Tipo_user: Usertipo.Cliente
 }


  


}
