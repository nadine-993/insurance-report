import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../_services/reportPDF.service';
import { ChartOptions } from 'chart.js';
import { PopulationService } from '../../_services/population.service';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-claims-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './claims-chart.component.html',
  styleUrls: ['./claims-chart.component.css']
})
export class ClaimsChartComponent implements OnInit {

reportData = inject(ReportService)['reportDataSubject'].value;
  population = inject(PopulationService).population;
  memberTotalCount: number | null = null;

    // Chart data
    barChartLabels: string[] = [
      'Paid Claims',
      'Outstanding Claims',
      'Total Claims',
      'Paid Per Claimant',
      'Paid Per Claim',
      'Claims Per Claimant'
    ];
    

    barChartData: any = [];  

    chartOptions: ChartOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: { beginAtZero: true }
      }
      
  }
  ngOnInit(): void {
 

    //chart data view
    const paidClaims = this.reportData?.totalValues?.claimsProcessed || 0;
    const outstandingClaims =
      (this.reportData?.totalValues?.claimsIncurredReportedNotProcessed || 0) +
      (this.reportData?.totalValues?.claimsIncurredNotReported || 0);
    const totalClaims = paidClaims + outstandingClaims;
    const paidPerClaimant = this.population > 0 ? paidClaims / this.population : 0;
    const claimsPerClaimant =
      this.population > 0 && this.memberTotalCount
        ? this.memberTotalCount / this.population
        : 0;
    const paidPerClaim = 0; // Replace with actual logic if needed

    this.barChartData = [
      paidClaims,
      outstandingClaims,
      totalClaims,
      paidPerClaimant,
      paidPerClaim,
      claimsPerClaimant
    ];
   
  }
}

