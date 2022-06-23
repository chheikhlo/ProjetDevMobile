import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  user: Users[];
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${API_URL}/Users`);
  }

  get(id: number): Observable<Users> {
    return this.httpClient.get<Users>(`${API_URL}/Users/${id}`);
  }

  post(user: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${API_URL}/Users/`, user);
  }

  put(user: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${API_URL}/Users/${user.id}`, user);

  }

  delete(id: number): Observable<Users> {
    return this.httpClient.delete<Users>(`${API_URL}/Users/${id}`);
  }


}
