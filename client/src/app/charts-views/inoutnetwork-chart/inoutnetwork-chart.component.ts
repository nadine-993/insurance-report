import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';
import { ReportService } from '../../_services/reportPDF.service';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-inoutnetwork-chart',
  standalone: true,
  imports: [CommonModule,NgChartsModule ],
  templateUrl: './inoutnetwork-chart.component.html',
  styleUrls: ['./inoutnetwork-chart.component.css']
})
export class InoutnetworkChartComponent   {

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
  get total(): number {
    return this.inNetworkTotal + this.outNetworkTotal;
  }

  get inPercentage(): number {
    return this.total ? (this.inNetworkTotal / this.total) * 100 : 0;
  }

  get outPercentage(): number {
    return this.total ? (this.outNetworkTotal / this.total) * 100 : 0;
  }

    // Pie Chart
    pieChartLabels: string[] = ['In Network', 'Out Of Network'];
    pieChartData = {
      labels: ['In Network', 'Out Of Network'],
      datasets: [{
        data: [this.inNetworkTotal, this.outNetworkTotal],
        backgroundColor: ['#4A90E2', '#D0021B']
      }]
    };    pieChartType: ChartType = 'pie';
  
    // Bar + Line Chart
    barChartData: ChartConfiguration<'bar' | 'line'>['data'] = {
      labels: ['In Network', 'Out Of Network'],
      datasets: [
        {
          type: 'bar',
          label: 'Value',
          data: [this.inNetworkTotal, this.outNetworkTotal],
          backgroundColor: '#4A90E2'
        },
        {
          type: 'line',
          label: 'Percentage',
          data: [this.inPercentage, this.outPercentage],
          yAxisID: 'y1',
          borderColor: '#D0021B',
          tension: 0.4
        }
      ]
    };
  
    barChartOptions: ChartConfiguration<'bar' | 'line'>['options'] = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          position: 'left'
        },
        y1: {
          beginAtZero: true,
          position: 'right',
          ticks: {
            callback: function (value) {
              return value + '%';
            }
          }
        }
      }
    };
  }


