import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.url}groups/felipe_regalado`;
  }

  get getGroups(): Observable<any> {
    return this.http.get(`${this.url}`)
                    .pipe( pluck('data', 'groups') );
  }
}
