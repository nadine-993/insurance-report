import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../../_services/reportPDF.service';
import { ChartData, ChartOptions } from 'chart.js';
import { FullReport } from '../../../_Models/FullReport';
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
  reportData = inject(ReportService)['reportDataSubject'].value;

  mergedData: {
    icdDescription: string;
    ipCount: number;
    ip: number;
    opCount: number;
    op: number;
    total: number;
    percentage: number;
  }[] = [];

  barChartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: []
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333'
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.raw as number;
            return `${label}: ${value.toLocaleString()} AED`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#333'
        },
        title: {
          display: true,
          text: 'Condition',
          color: '#333'
        }
      },
      y: {
        ticks: {
          color: '#333'
        },
        title: {
          display: true,
          text: 'Claim Amount (AED)',
          color: '#333'
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

      diagnoseNumbers.forEach(number => {
        const entry = mergedMap.get(number.icdDescription);
        if (entry) {
          entry.ipCount = number.ip;
          entry.opCount = number.op;
        }
      });

      this.mergedData = Array.from(mergedMap.values()).map(entry => ({
        ...entry,
        percentage: this.totalClaims > 0 ? (entry.total / this.totalClaims) * 100 : 0
      }));

      const top10 = this.mergedData
        .sort((a, b) => b.total - a.total)
        .slice(0, 10);

      this.barChartData = {
        labels: top10.map(c => c.icdDescription),
        datasets: [
          {
            label: 'Top 10 Conditions by Claim Value',
            data: top10.map(c => c.total),
            backgroundColor: [
              '#5B9BD5', '#C55A11', '#70AD47', '#8064A2', '#4BACC6',
              '#F79646', '#4472C4', '#843C0C', '#9BBB59', '#7030A0'
            ]
          }
        ]
      };
    });
  }

  get totalval(): number {
    return this.reportData?.partII.memberTypeValues.find(n => n.memberType.trim() === 'totals')?.total || 0;
  }
}
