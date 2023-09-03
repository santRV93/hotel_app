import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'https://reqres.in/api';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  authenticateUser(body: any) {
    return this.http.post(`${this.BASE_URL}/login`, body);
  }

  storeSession(email: string) {
    let route = '';
    let dataSession = {
      email: email,
      name: 'Santiago',
      lastName: '',
      role: ''
    };
    if (email === 'michael.lawson@reqres.in') {
      route = 'index/hoteles';
      dataSession.lastName = 'Admin';
      dataSession.role = 'ADMIN';
    } else if (email === 'tobias.funke@reqres.in') {
      dataSession.lastName = 'Client';
      dataSession.role = 'CLIENT';
      route = 'cliente/home';
    }
    localStorage.setItem('user', JSON.stringify(dataSession));
    this.router.navigate([route]);
  }
}
