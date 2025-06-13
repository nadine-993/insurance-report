import { Component, inject, NgModule } from '@angular/core';
import { ReportSummary } from '../_Models/report-summary';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClaimsDataService } from '../_services/claimsData.service';

@Component({
  selector: 'app-report-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-summary.component.html',
  styleUrl: './report-summary.component.css'
})
export class ReportSummaryComponent {
  claimsdata= inject(ClaimsDataService)
  reports:  ReportSummary[]=[
    {
      id: 1,
      schemeName: 'ACME Platinum',
      policyNumber: 12345678,
      initialPolicyEffectiveDate: new Date,
      policyEffectiveDate: new Date,
      policyExpiredDate: new Date,
      valueOfClaimsProcessed: 1903412,
      claimsReportedNotProcessed: 174335,
      claimsNotReported: 7000
    },
  ]

}
