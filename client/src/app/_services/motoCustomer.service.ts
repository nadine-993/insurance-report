import { HttpClient } from '@angular/common/http';
import { inject, Injectable, model, signal } from '@angular/core';
import { User } from '../_Models/user';
import { map } from 'rxjs';
import { motoCustomer } from '../_Models/motoCustomer';

@Injectable({
  providedIn: 'root'
})
export class MotoCustomerService {
  private http=inject (HttpClient);
  currentUser= signal<User | any>(null);
  profiles: any;


  
  createMotoProfile(profile: any){
    return this.http.post<motoCustomer>('http://localhost:5000/api/MotoCustomer/createprofile', profile).pipe(
        map(customer=>{ console.log('Created customer:', customer);
            return customer;})
    )
  

  }
 

}
