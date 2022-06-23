import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { Salles } from '../models/salles';


@Injectable({
  providedIn: 'root'
})
export class SallesService {

  salles: Salles[];
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Salles[]> {
    return this.httpClient.get<Salles[]>(`${API_URL}/Salles`);
  }

  get(id: number): Observable<Salles> {
    return this.httpClient.get<Salles>(`${API_URL}/Salles/${id}`);
  }

  post(salle: Salles): Observable<Salles> {
    return this.httpClient.post<Salles>(`${API_URL}/Salles/`, salle);
  }

  put(salle: Salles): Observable<Salles> {
    return this.httpClient.put<Salles>(`${API_URL}/Salles/${salle.idSalle}`, salle);

  }

  delete(id: number): Observable<Salles> {
    return this.httpClient.delete<Salles>(`${API_URL}/Salles/${id}`);
  }

}
