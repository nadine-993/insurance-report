import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../_services/reportPDF.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { InoutnetworkChartComponent } from "../../charts-views/inoutnetwork-chart/inoutnetwork-chart.component";

@Component({
  selector: 'app-inoutnetwork',
  standalone: true,
  imports: [CommonModule, NgChartsModule, InoutnetworkChartComponent],
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

