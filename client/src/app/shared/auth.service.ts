import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registrationUrl = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post(this.registrationUrl, userData);
  }

}
