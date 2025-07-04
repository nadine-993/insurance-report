import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, model, signal } from '@angular/core';
import { User } from '../_Models/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http=inject (HttpClient);
  baseUrl = '/api/';

  currentUser= signal<User | any>(null);

  login(model: {email: string; password:string}){
    return this.http.post<User>(this.baseUrl+'account/login', model).pipe(
      map(user=>{
        if(user?.token){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    )
  }

  register(model: any){
    return this.http.post<User>(this.baseUrl+'account/register', model).pipe(
      map(user=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    )
  }
  getCurrentUser(): Observable<{ id: string; email: string; firstName: string; lastName: string }> {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = user?.token;
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<{ id: string; email: string; firstName: string; lastName: string }>(
      this.baseUrl + 'account/me',
      { headers }
    );
  }

  logout(){
    localStorage.removeItem('user'),
    this.currentUser.set(null);
  }

}
