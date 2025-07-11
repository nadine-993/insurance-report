import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReportService } from '../../_services/reportPDF.service';
import { NgChartsModule } from 'ng2-charts';
import { FullReport } from '../../_Models/FullReport';


@Component({
  selector: 'app-claimsdistribution-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './claimsdistribution-chart.component.html',
  styleUrls: ['./claimsdistribution-chart.component.css']
})
export class ClaimsdistributionChartComponent implements OnInit  {
  pieChartType: ChartType = 'pie';

  pieChartData: ChartData<'pie', number[], string> = {
    labels: [],
    datasets: []
  };

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#333',
          boxWidth: 20
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw as number;
            return `${label}: ${value.toLocaleString()} AED`;
          }
        }
      },
      datalabels: {
        color: '#FFFFFF',
        font: {
          weight: 'bold' as const,
          size: 12
        },
        //offset: 50,           //push labels outward
        //anchor: 'end' as const,        // anchor at edge of slice
        align: 'end' as const, 
        formatter: (value: number, context) => {
          const total = context.chart.data.datasets[0].data.reduce((a: any, b: any) => a + b, 0);
          const percent = ((value / total) * 100).toFixed(1);
          return `${percent}%`;
        }
      }
    }
  };


  private reportService = inject(ReportService);

  ngOnInit(): void {
    this.reportService.reportData$.subscribe((data: FullReport | null) => {
      if (!data?.partII) return;

      const values = data.partII.diagnosisValues;
      const top10 = [...values].sort((a, b) => b.total - a.total).slice(0, 10);

      this.pieChartData = {
        labels: top10.map(item => item.icdDescription),
        datasets: [
          {
            label: 'Top 10 Conditions by Claim Value',
            data: top10.map(item => item.total),
            backgroundColor: [
              '#5B9BD5	', '#C55A11', '#70AD47', '#8064A2', '#4BACC6',
              '#F79646', '#4472C4', '#843C0C', '#9BBB59', '#7030A0',
              '#264478', '#C0504D'
            ]
          }
        ]
      };
    });
  }
}


      
