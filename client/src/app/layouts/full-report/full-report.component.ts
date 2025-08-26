import { Component, inject } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { ReportService } from '../../_services/reportPDF.service';
import { FullReport } from '../../_Models/FullReport';
import { DiagnosisInputComponent } from "../../components/user-inputs/diagnosis-input/diagnosis-input.component";
import { ProviderInputComponent } from "../../components/user-inputs/provider-input/provider-input.component";
import { NetworkInputComponent } from "../../components/user-inputs/network-input/network-input.component";
import { ClaimsPerMonthInputComponent } from "../../components/user-inputs/claims-per-month-input/claims-per-month-input.component";
import { MemberTypeInputComponent } from "../../components/user-inputs/member-type-input/member-type-input.component";
import { PopulationCensusInputComponent } from "../../components/user-inputs/population-census-input/population-census-input.component";
import { ReportInputComponent } from "../../components/user-inputs/report-input/report-input.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-report',
  standalone: true,
  imports: [DiagnosisInputComponent, ProviderInputComponent, NetworkInputComponent, ClaimsPerMonthInputComponent, MemberTypeInputComponent, PopulationCensusInputComponent, ReportInputComponent],
  templateUrl: './full-report.component.html',
  styleUrl: './full-report.component.css'
})
export class FullReportComponent {

 private  accountService = inject(AccountService)
 reportService= inject(ReportService)
   reportData: FullReport | null = null;
  router=inject(Router);

   onSubmit() {
   
          this.router.navigate(['/excel-report']);

        }
    
  
  }

