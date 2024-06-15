import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../loginusuario/apiservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  
//isLoggin : boolean = false;

sin_iniciar_seccion: boolean;
seccion_iniciada:boolean;

constructor(private dataService: ApiserviceService){

  dataService.getLoggelnName.subscribe(name => this.changeName(name));
  
  if(this.dataService.isLoggedIn()){
    console.log("loggedln");
    this.sin_iniciar_seccion = false;
    this.seccion_iniciada = true;

  }else{
    this.sin_iniciar_seccion = true;
    this.seccion_iniciada = false;
  }

}

private changeName(name: boolean):void{
this.seccion_iniciada = name;
this.sin_iniciar_seccion = !name;

}

logout(){
  this.dataService.deleteToken();
  window.location.href ='home';
}



}


