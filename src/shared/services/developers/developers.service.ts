import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeveloperListing } from 'src/shared/models/developers.model';

const path = `https://workshop-web-production.up.railway.app/api/developers`;

@Injectable({ providedIn: 'root' })
export class DevelopersService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<DeveloperListing[]>(`${path}`);
  }


}
