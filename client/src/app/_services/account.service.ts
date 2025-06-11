import { HttpClient } from '@angular/common/http';
import { inject, Injectable, model, signal } from '@angular/core';
import { User } from '../_Models/user';
import { map } from 'rxjs';

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

  logout(){
    localStorage.removeItem('user'),
    this.currentUser.set(null);
  }

}
