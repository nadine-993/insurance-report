import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private toastr= inject(ToastrService);
   accountService= inject (AccountService);
   private router= inject(Router);
   model: { email: string; password: string } = {
    email: '',
    password: ''
  }; 
  
  
  login(){
    this.accountService.login(this.model).subscribe({
     next: response =>{
      console.log('✅ API response:', response);
      this.router.navigateByUrl('/members'),
      console.log('Sending login request to API with:', this.model);


    } ,
    error: err => {
      console.error('❌ API error:', err);
      this.toastr.error(err.error?.message || 'Login failed');
    }
  });
  }

logout(){
this.accountService.logout();
this.router.navigateByUrl('/')  
}

}
