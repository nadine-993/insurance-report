import { Component, inject, OnInit } from '@angular/core';
import { ReportService } from '../../_services/reportPDF.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ClaimspermonthChartComponent } from '../../charts-views/claimspermonth-chart/claimspermonth-chart.component';
import { FullReport } from '../../_Models/FullReport';

@Component({
  selector: 'app-claimspermembershiptype',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './claimspermembershiptype.component.html',
  styleUrls: ['./claimspermembershiptype.component.css']
})
export class ClaimspermembershiptypeComponent {

  reportData = inject(ReportService)['reportDataSubject'].value;




}
