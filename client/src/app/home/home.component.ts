import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReportService } from '../_services/reportPDF.service';
import { CommonModule, NgIf, TitleCasePipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { FullReport } from '../_Models/FullReport';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RegisterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  http= inject (HttpClient)
  private accountService = inject(AccountService);
  registerMode=false;
  users:any;
  profiles: any;
  currentUser: any;

//uploading the pdf
reportData: FullReport | null = null;
isLoading=false;
uploadService= inject (ReportService)
baseUrl='/api/'



  ngOnInit():void{
    this.accountService.getCurrentUser().subscribe({
      next: user => console.log('Current user:', user),
      error: err => console.error('Error fetching current user', err)
    });
  }
  registerToggle(){
    this.registerMode=!this.registerMode
  }
  cancelRegisterMode(event:boolean){
    this.registerMode=event;

  }
  getUsers(){
    // ✅ Get the token from localStorage
         const token = localStorage.getItem('token');
    
         // ✅ Create headers with Authorization if token exists
         const headers = new HttpHeaders({
           Authorization: `Bearer ${token}`
         });
         console.log('✅ Token used for upload:', token);
    this.http.get(this.baseUrl +  '/account/me').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: ()=> console.log('Request has completed')
    }
  )

  }

  onFileSelected(event:any):void{
    const file:File=event.target.files[0];

    if (file&& file.type==='application/pdf'){
      this.isLoading=true;
      console.log('📁 Selected file:', file); // ✅ Debug

      this.uploadService.uploadPdf(file).subscribe({
        next:(response)=> {
          console.log('✅ Full PDF report response:', response);
     
          this.reportData=response;
          this.isLoading=false;
        },
        error: (err)=> {
          console.error('Upload error:', err);
          this.isLoading=false;
        }
      })
    }
  }

EndOfPopulation(){
  
}


}
