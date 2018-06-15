import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

import {User} from "../data/user";
import {Language} from "../data/language";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly BASE_URL = "http://localhost:3001";
  private readonly DEFAULT_USER_ID = 0;

  private userId: number = this.DEFAULT_USER_ID;

  constructor(private http: HttpClient) { }

  setUserId(userId: number) {
    this.userId = userId;
  }

  getUserData(): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/users/${this.userId}`);
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.BASE_URL}/languages`);
  }
}
