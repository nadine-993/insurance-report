import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../_services/reportPDF.service';

@Component({
  selector: 'app-inoutnetwork',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inoutnetwork.component.html',
  styleUrls: ['./inoutnetwork.component.css']
})
export class InoutnetworkComponent {

  reportData = inject(ReportService)['reportDataSubject'].value;

  get inNetworkTotal(): number {
    return this.reportData?.partII?.networkValues.find(n => n.networkType?.trim() === 'In network')?.total || 0;
  }

  get outNetworkTotal(): number {
    return this.reportData?.partII?.networkValues.find(n => n.networkType?.trim() === 'Out of network')?.total || 0;
  }

  get totalClaims(): number {
    return (this.reportData?.totalValues.claimsProcessed || 0) +
           (this.reportData?.totalValues.claimsIncurredNotReported || 0) +
           (this.reportData?.totalValues.claimsIncurredReportedNotProcessed || 0);
  }
}
