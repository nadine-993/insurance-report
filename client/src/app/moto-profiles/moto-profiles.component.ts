import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-moto-profiles',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './moto-profiles.component.html',
  styleUrl: './moto-profiles.component.css'
})
export class MotoProfilesComponent {
 http= inject (HttpClient)
  
  registerMode=false;
  users:any;
  profiles: any;


  ngOnInit():void{
  this.getMotoProfile();
}
 

  
  getMotoProfile(){
    this.http.get('http://localhost:5000/api/MotoCustomer').subscribe({
      next: response => this.profiles = response,
      error: error => console.log(error),
      complete: ()=> console.log('Request has completed')
    }
  )

  }

}
