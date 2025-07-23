import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../../_services/reportPDF.service';
import { NgChartsModule } from 'ng2-charts';
import { Chart, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the plugin globally
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-claimspermonth-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './claimspermonth-chart.component.html',
  styleUrls: ['./claimspermonth-chart.component.css']
})
export class ClaimspermonthChartComponent {
  reportData = inject(ReportService)['reportDataSubject'].value;

  claimsByMonth = this.reportData?.partII?.claimsPerServiceMonth || [];

  pieChartType: ChartType = 'pie';

  pieChartData = {
    labels: this.claimsByMonth.map(m => {
      const date = new Date(m.monthEndDate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${year}-${month}`;
    }),
    datasets: [{
      data: this.claimsByMonth.map(m => m.value),
      backgroundColor: [
        '#5B9BD5', '#C55A11', '#70AD47', '#8064A2', '#4BACC6',
        '#F79646', '#4472C4', '#843C0C', '#9BBB59', '#7030A0',
        '#264478', '#C0504D'
      ]
    }]
  };

  pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
   
    plugins: {
      legend: {
        position: 'top' as const
      },
     
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const total = context.dataset.data.reduce((sum: number, val: number) => sum + val, 0);
            const value = context.parsed;
            const percentage = ((value / total) * 100).toFixed(2) + '%';
            return `${context.label}: ${percentage}`;
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
        align: 'end' as const,         // align outside slice
        formatter: (value: number, context: any) => {
          const total = context.chart.data.datasets[0].data.reduce((sum: number, val: number) => sum + val, 0);
          const percentage = (value / total * 100).toFixed(2) + '%';
          return percentage;
        }
      }
    }
  };
  
}
