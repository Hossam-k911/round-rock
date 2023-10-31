import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';

import { testymonials, users } from '../models/testy-monials.model';
import { contactUs } from '../models/contact-us.model';
@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  constructor(private http: HttpClient) {}
  usersApiUrl: string = 'https://reqres.in/api/users';
  upSkillingUrl: string = 'http://upskilling-egypt.com:3000/contact';

  getUsersData(pageNo: number): Observable<testymonials[]> {
    return this.http.get<testymonials[]>(`${this.usersApiUrl}?page=${pageNo}`);
  }

  postContactData(contact: contactUs) {
    return this.http.post(`${this.upSkillingUrl}`, contact);
  }
}
