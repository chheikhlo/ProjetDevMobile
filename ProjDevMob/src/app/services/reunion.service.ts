import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Reunion } from '../models/reunion';
import { Salles } from '../models/salles';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  reunion: Reunion[];


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Reunion[]> {
      return this.httpClient.get<Reunion[]>(`${API_URL}/Reunions`);
  }

  getR(id: number): Observable<Reunion[]> {
    return this.httpClient.get<Reunion[]>(`${API_URL}/Reunions/${id}`);
  }

  get(id: number): Observable<Reunion> {
    return this.httpClient.get<Reunion>(`${API_URL}/Reunions/${id}`);
  }

  post(reunion: Reunion): Observable<Reunion> {
    return this.httpClient.post<Reunion>(`${API_URL}/Reunions/`, reunion);
  }

  put(reunion: Reunion): Observable<Reunion> {
    return this.httpClient.put<Reunion>(`${API_URL}/Reunions/${reunion.idReunion}`, reunion);
  }

  delete(id: number): Observable<Reunion> {
    return this.httpClient.delete<Reunion>(`${API_URL}/Reunions/${id}`);
  }
}
