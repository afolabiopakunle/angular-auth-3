import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post<SuccessResponse | FailureResponse>(this.baseUrl + 'register', userData);
  }

  login(userData: any) {
    return this.http.post(this.baseUrl + 'login', userData)
  }

}


export interface SuccessResponse {
  token: string;
  user: any; // should change any to your user type
}

export interface FailureResponse {
  success: false;
  msg: string;
}

