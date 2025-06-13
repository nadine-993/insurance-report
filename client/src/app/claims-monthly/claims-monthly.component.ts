import { Component, inject, OnInit } from '@angular/core';
import { ClaimsMonthlyService } from '../_services/claimMonthly.service';
import { ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { totalCalimsProcessedPerServiceMonthByAEDValue } from '../_Models/totalCalimsProcessedPerServiceMonthByAEDValue';

@Component({
  selector: 'app-claims-monthly',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './claims-monthly.component.html',
  styleUrls: ['./claims-monthly.component.css']
})
export class ClaimsMonthlyComponent implements OnInit {

  // Inject service
  claimMonthlyService = inject(ClaimsMonthlyService);
  

  // Data holders
  claimsMonthly: totalCalimsProcessedPerServiceMonthByAEDValue[] = [];

  // Chart-related properties
  showChart = false;
  pieChartData!: ChartData<'pie', number[], string>;
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Total Claims Processed per Service Month (AED)'
      }
    }
  };
  pieChartType: 'pie' = 'pie';

  ngOnInit(): void {
    // Load table data
    this.claimsMonthly = this.claimMonthlyService.TotalClaimsProcessedperServicebyAEDvalue;

    // Build chart dynamically from service data
    this.pieChartData = {
      labels: this.claimsMonthly.map(item => `${item.monthEndDate} ${item.year}`),
      datasets: [
        {
          data: this.claimsMonthly.map(item => item.value)
        }
      ]
    };
  }

  toggleChart() {
    this.showChart = !this.showChart;
  }
}
