import { Injectable } from '@angular/core';
import { CD } from '../models/cd';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) {}

  getAllCds(): Observable<CD[]> {
    return this.http.get<CD[]>('http://localhost:3000/CD ');
  };


  getCDById(id: number): Observable<CD> {
    const cd = this.http.get<CD>('http://localhost:3000/CD/' + id);
    if (cd!==undefined) {
      return cd;
    }
    else {
      throw new Error('CD introuvable');
    }
  }

  createCD(cd: CD): Observable<CD> {
    this.getAllCds().pipe(
      map((cds => [...cds].sort((a, b) => a.id - b.id))),
      map(cds_tries => (cds_tries[cds_tries.length - 1])),
      map(dernier_cd => (cd.id = dernier_cd.id + 1)),
      switchMap(()=> (this.http.post<CD>('http://localhost:3000/CD', cd)))
    );


    return this.http.post<CD>('http://localhost:3000/CD', cd);
  }
}

