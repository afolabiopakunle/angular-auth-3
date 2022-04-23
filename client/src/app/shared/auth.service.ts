import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post(this.baseUrl + 'register', userData);
  }

  login(userData: any) {
    return this.http.post(this.baseUrl + 'login', userData)
  }

}
