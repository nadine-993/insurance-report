import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../_services/reportPDF.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { FullReport } from '../../_Models/FullReport';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-top10conditions-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './top10conditions-chart.component.html',
  styleUrls: ['./top10conditions-chart.component.css']
})
export class Top10conditionsChartComponent implements OnInit {
reportService = inject(ReportService);
  reportData= inject(ReportService)['reportDataSubject'].value


  mergedData: {
    icdDescription: string;
    ipCount: number;
    ip: number;
    opCount: number;
    op: number;
    total: number;
    percentage: number;
  }[] = [];
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
        display: true,
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

      const diagnoseValues = data.partII.diagnosisValues;
      const diagnoseNumbers = data.partII.diagnosisNumbers;

      this.totalClaims = diagnoseValues.reduce((sum, v) => sum + v.total, 0);

      const mergedMap = new Map<string, any>();

      // Step 1: Start from diagnose values
      diagnoseValues.forEach(value => {
        mergedMap.set(value.icdDescription, {
          icdDescription: value.icdDescription,
          ip: value.ip,
          op: value.op,
          total: value.total,
          ipCount: 0,
          opCount: 0,
          percentage: 0
        });
      });

      // Step 2: Add counts
      diagnoseNumbers.forEach(number => {
        const entry = mergedMap.get(number.icdDescription);
        if (entry) {
          entry.ipCount = number.ip;
          entry.opCount = number.op;
        }
      });

      // Step 3: Convert to array and compute percentages
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
        labels: top10.map(c => c.icdDescription),
        datasets: [
          {
            label: 'Top 10 Conditions by Claim Value',
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
