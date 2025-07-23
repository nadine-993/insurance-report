import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ReportService } from '../../../_services/reportPDF.service';
import { FullReport } from '../../../_Models/FullReport';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-claimsdistribution-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './claimsdistribution-chart.component.html',
  styleUrls: ['./claimsdistribution-chart.component.css']
})
export class ClaimsdistributionChartComponent implements OnChanges  {
  
  @Input() optotalval!: number;
  @Input() iptotalval!: number;
  @Input() dentaltotalval!: number;
  @Input() maternitytotalval!: number;

  pieChartLabels: string[] = [
    'Out Patient Including Pharmacy',
    'In Patient',
    'Dental',
    'Maternity'
  ];
  pieChartType: ChartType = 'pie';
  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };
  pieChartColors = [
    {
      backgroundColor: ['#4e79a7', '#e15759', '#9fd475', '#ab82c5'],
    }
  ];
  pieChartData: ChartData<'pie', number[], string> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#4e79a7', '#e15759', '#9fd475', '#ab82c5']
      }
    ]
  };

  ngOnChanges() {
    const total = this.optotalval + this.iptotalval + this.dentaltotalval + this.maternitytotalval;

    this.pieChartData.labels = [
      'Out Patient Including Pharmacy',
      'In Patient',
      'Dental',
      'Maternity'
    ];

    this.pieChartData.datasets[0].data = total > 0 ? [
      +(this.optotalval),
      +(this.iptotalval),
      +(this.dentaltotalval) ,
      +(this.maternitytotalval) 
    ] : [0, 0, 0, 0];
  }
}