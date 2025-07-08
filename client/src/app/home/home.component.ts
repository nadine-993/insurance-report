import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReportService } from '../_services/reportPDF.service';
import { CommonModule, NgIf, TitleCasePipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { FullReport } from '../_Models/FullReport';
import { PopulationService } from '../_services/population.service';
import { Router } from '@angular/router';
//import { ExcelReportcomponentComponent } from '../excel-reportcomponent/excel-reportcomponent.component';


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
  populationService = inject(PopulationService);
  reportService=inject(ReportService);

  router=inject(Router);

  registerMode=false;
  users:any;
  profiles: any;
  currentUser: any;


  goToExcelReport() {
    this.router.navigate(['/excel-report']);
  }

//uploading the pdf
reportData: FullReport | null = null;
isLoading=false;
uploadService= inject (ReportService)
baseUrl='/api/'
  memberTotalCount: number | null = null;
  population: any;



  ngOnInit():void{
    // this.accountService.getCurrentUser().subscribe({
    //   next: user => console.log('Current user:', user),
    //   error: err => console.error('Error fetching current user', err)
      
    // });
   

 
  }
  registerToggle(){
    this.registerMode=!this.registerMode
  }
  cancelRegisterMode(event:boolean){
    this.registerMode=event;

  }
  // getUsers(){
  //   // ✅ Get the token from localStorage
  //        const token = localStorage.getItem('token');
    
  //        // ✅ Create headers with Authorization if token exists
  //        const headers = new HttpHeaders({
  //          Authorization: `Bearer ${token}`
  //        });
  //        console.log('✅ Token used for upload:', token);
  //   this.http.get(this.baseUrl +  '/account/me').subscribe({
  //     next: response => this.users = response,
  //     error: error => console.log(error),
  //     complete: ()=> console.log('Request has completed')
  //   }
  // )

  // }

  //upload the pdf and getting the information
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
  
    if (file && file.type === 'application/pdf') {
      this.isLoading = true;
      console.log('📁 Selected file:', file);
  
      this.uploadService.uploadPdf(file).subscribe({
        next: (response) => {
          console.log('✅ Full PDF report response:', response);
          this.reportData = response;
          this.isLoading = false;
      
            // 👇 Set the population in the service
            const censusEnd = response.populationCensusEnd;
            this.populationService.processPopulationDataEnd(censusEnd);

            this.population = this.populationService.population;
            console.log('population is :',this.population);

            //get the total number of claims by memeber type 
          const totalEntry = response.partII.memberTypeNumbers.find(m => m.memberType === 'totals');
          this.memberTotalCount = totalEntry?.total || null;

          
        },
        
        error: (err) => {
          console.error('Upload error:', err);
          this.isLoading = false;
        }
      });
    }
  }


  
  





}
