import { Component, OnInit } from '@angular/core';
import { ServiceregistroserviceService } from './serviceregistroservice.service';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
 
  email: string="";
  nombre: string="";
  prioridad: number=0;
  telefono: string="";
  password: string="";
 
 
  constructor(private service_registrar: ServiceregistroserviceService){}
  

   onSubmit(form: any) {
    if(form.valid){
      alert("Formulario enviado correctamente");
      //console.log(form.value.email);
      const user={
         email: form.value.email,
         nombre: form.value.nombre,
         prioridad: form.value.prioridad,
         telefono: form.value.telefono,
         password: form.value.password
      }

      this.service_registrar.registerUser(user).subscribe(response=>{
        console.log("Respuesta del servidor", response);
      }, error=>{
            console.log("Error del servidor",error);
      });

    }else{
      alert("Formulario invalido, por favor revisa los campos");
    }
    
   }
    
}
