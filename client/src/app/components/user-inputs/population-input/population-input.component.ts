import { Component, inject } from '@angular/core';
import { FullReport } from '../../../_Models/FullReport';
import { ReportService } from '../../../_services/reportPDF.service';
import { AccountService } from '../../../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-population-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './population-input.component.html',
  styleUrl: './population-input.component.css'
})
export class PopulationInputComponent {
 reportService=inject(ReportService);
  accountService= inject (AccountService);
    private toastr= inject(ToastrService);
http= inject (HttpClient);
  router=inject(Router);


  reportData: FullReport | null = null;
  isLoading=false;
baseUrl='/api/'
memberTotalCount: number | null = null;
population: any;
totalNumberOfEmployees?: number;
totalNumberOfSpouse?: number;
totalNumberOfDependents?: number;
creatingDate?: string;
selectedFile: File | null = null;



  onSubmit() {
    if (!this.selectedFile|| 
      this.totalNumberOfEmployees == null || 
      this.totalNumberOfSpouse == null || 
      this.totalNumberOfDependents == null || 
      !this.creatingDate) {
      alert('Please select a PDF file and fill in the fields');
      return;
    }
    this.isLoading = true;
    this.reportService.uploadPdf(this.selectedFile, this.totalNumberOfEmployees, 
    this.totalNumberOfDependents,
    this.totalNumberOfSpouse,
    this.creatingDate).subscribe({
    next: (report) => {
        this.reportData = report;
        this.isLoading = false;
        this.toastr.success('Redirected to report...');
        setTimeout(() => {
          this.router.navigate(['/excel-report']);
          this.isLoading = false;

        }, 1000);
        console.log(report);
      },
      error: (err) => {
        console.error('Upload error:', err);
        this.isLoading = false;
      }
    });
  }

}
