import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldUser } from './field-user';

@Injectable({
  providedIn: 'root'
})
export class ServiceregistroserviceService {

  constructor(private http: HttpClient) { }

  Api_URL='      ';

  registerUser(user:any):Observable<FieldUser>{
    return this.http.post<FieldUser>(this.Api_URL,user);

  }

}
