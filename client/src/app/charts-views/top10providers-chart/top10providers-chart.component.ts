import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../_services/reportPDF.service';
import { ChartData, ChartOptions } from 'chart.js';
import { FullReport } from '../../_Models/FullReport';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-top10providers-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './top10providers-chart.component.html',
  styleUrls: ['./top10providers-chart.component.css']
})
export class Top10providersChartComponent implements OnInit {

  reportService = inject(ReportService);
    reportData= inject(ReportService)['reportDataSubject'].value
  
    mergedData: {
      providerName: string;
      ipCount: number;
      ip: number;
      opCount: number;
      op: number;
      total: number;
      percentage: number;
    }[] = [];
  
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
          display: true,
          color: '#FFFFFF',
        font: {
          weight: 'bold' as const,
          size: 12
        },
         align: 'end' as const,         // align outside slice
          formatter: (value: number, context) => {
            const total = context.chart.data.datasets[0].data.reduce((a: any, b: any) => a + b, 0);
            const percent = ((value / total) * 100).toFixed(1);
            return `${percent}%`;
          }
        }
      }
    };
    
  
    totalClaims = 0;

  ngOnInit(): void {
 this.reportService.reportData$.subscribe((data: FullReport | null) => {
      if (!data || !data.partII) return;

      const providerValues = data.partII.providerValues;
      const providerNumbers = data.partII.providerNumbers;


      const mergedMap = new Map<string, any>();
  
      providerValues.forEach(value => {
        mergedMap.set(value.providerName, {
          providerName: value.providerName,
          ip: value.ip,
          op: value.op,
          total: value.total,
          ipCount: 0,
          opCount: 0,
          percentage: 0 // will calculate later
        });
      });

      providerNumbers.forEach(number => {
        const entry = mergedMap.get(number.providerName);
        if (entry) {
          entry.ipCount = number.ip;
          entry.opCount = number.op;
        } else {
          mergedMap.set(number.providerName, {
            providerName: number.providerName,
            ip: 0,
            op: 0,
            total: 0,
            ipCount: number.ip,
            opCount: number.op,
            percentage: 0
          });
        }
      });

      this.mergedData = Array.from(mergedMap.values()).map(entry => ({
        ...entry,
        percentage: this.totalClaims > 0 ? (entry.total / this.totalClaims) * 100 : 0
      }));
    // Step 4: Sort and slice top 10
    const top10 = this.mergedData
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  // Step 5: Generate pie chart data
  this.pieChartData = {
    labels: top10.map(c => c.providerName),
    datasets: [
      {
        label: 'Top 10 provders by Claim Value',
        data: top10.map(c => c.total),
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


get totalval(): number{

return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='totals')?.total|| 0;
    
}


}
