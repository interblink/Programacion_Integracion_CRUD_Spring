import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { first } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string ="";
  password: string="";

 constructor(private dataService: ApiserviceService, private router:Router){}

  onSubmit(form:any){
    
    if(form.valid){
     // console.log(form.value.password);
      const user={
        email: form.value.email,
        password: form.value.password
      }

      this.Iniciar_seccion(user);

    }else{
      alert("Formulario invalido, por favor revisa los campos");
    }
  }
    Iniciar_seccion(user:any){

      //console.log("aaaa",user.email);
     // console.log("ddddd",user.password);

     this.dataService.userlogin(user)
     .pipe(first()).subscribe(data=>{
      if(Object.keys(data).length == 0 && data.constructor == Object){
        alert("No se encontro el usuario");
      }else{
        const redirect = this.dataService.redirectUrl || 'dashboard';
        this.router.navigate([redirect]);
      }
    },
    
    error =>{
     console.log("Error durante el inicio de sesion",error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario no encontrado!"
     // footer: '<a href="#">Why do I have this issue?</a>'
    });
    
    }
     );
    }

 }