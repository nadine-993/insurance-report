import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_Models/user';
import { Observable, tap, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  private router = inject(Router);
  baseUrl = 'https://alhimayahapi.scuritytech.com/';

  currentUser = signal<User | null>(null);

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.baseUrl + 'api/account/login', body).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
      }),
      switchMap(() => this.getCurrentUser()), // after login, fetch current user
      tap(user => {
        this.currentUser.set(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/home']);
      })
    );
  }

  getCurrentUser(): Observable<User> {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<User>(this.baseUrl + 'api/account/me', { headers }).pipe(
      tap(user => this.currentUser.set(user))
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}
