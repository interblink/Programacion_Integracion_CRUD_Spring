import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from './user-list';

@Injectable({
  providedIn: 'root'
})
export class SeviceListService {


  private apiUrl = 'http://localhost:8080/usuario/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UserList[]> {
    return this.http.get<UserList[]>(this.apiUrl);
  }

}
