import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const path = `https://workshop-web-production.up.railway.app/games`;

@Injectable({ providedIn: 'root' })
export class GamesService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`${path}`);
  }

  getById(id: number) {
    return this.http.get<any>(`${path}/${id}`);
  }

  register(cmd: any) {
    return this.http.post<any>(`${path}`, cmd, {
      observe: 'response',
    });
  }

  update(cmd: any) {
    return this.http.put(`${path}`, cmd, {
      observe: 'response',
    });
  }




}
