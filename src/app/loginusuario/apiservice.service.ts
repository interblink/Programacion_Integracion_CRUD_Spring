import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

 redirectUrl: string="";


//baseUrl: string ="http://localhost/clasegrupog8/datos34.json";

baseUrl: string ="http://localhost:8080/usuario/buscar_usuario";


getLoggelnName = new EventEmitter<boolean>();

constructor(private http: HttpClient) { }


public userlogin(user:any):Observable<any>{

  //console.log("aaaa",user.email);
  //console.log("ddddd",user.password);

   const params = new HttpParams()
   .set('email', user.email)
   .set('password',user.password)

  return this.http.post<any>(`${this.baseUrl}?${params.toString()}`,user).pipe(
    
   
    tap(response =>{

      console.log("Http response",response);
    }),

    map(user=>{

     this.setToken(user.name);
     this.getLoggelnName.emit(true);
     return user;

    })
  );


}


setToken(token:string){
  localStorage.setItem('token',token);
}

getToken(){
  return localStorage.getItem('token');
}

deleteToken(){
  localStorage.removeItem('token');
}

isLoggedIn(){
  const usertoken = this.getToken();
  if(usertoken != null){
    return true;
  }
  
  return false;
  
  }

}
