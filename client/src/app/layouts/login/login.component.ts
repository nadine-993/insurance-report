import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../_services/account.service';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private toastr= inject(ToastrService);
   accountService= inject (AccountService);
   private router= inject(Router);
email='';
password='';
error=''

 
 
  
  login(){
    this.accountService.login(this.email, this.password).subscribe({
     next: response =>{

    } ,
    error: err => {
      console.error('❌ API error:', err);
      this.toastr.error(err.error?.message || 'Login failed');
    }
  });
  }

logout(){
this.accountService.logout();
}

}
