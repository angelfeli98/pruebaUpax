import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.url}employees/felipe_regalado`;
  }

  get getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
                    .pipe( pluck('data', 'employees') );
  }

  public postUser = (data: any): Observable<any> =>
    this.http.post(this.url, data);

  public getUserByGroup = (id: string): Observable<any> =>
    this.http.get(`${this.url}/getByGroup?id=${id}`).pipe( pluck('data') );

}
