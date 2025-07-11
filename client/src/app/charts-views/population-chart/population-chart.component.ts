import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../_services/reportPDF.service';
import { PopulationService } from '../../_services/population.service';
import { ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-population-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './population-chart.component.html',
  styleUrls: ['./population-chart.component.css']
})
export class PopulationChartComponent implements OnInit {

  reportData = inject(ReportService)['reportDataSubject'].value;
   populationService = inject(PopulationService);
 
     
   barChartLabels: string[] = ['Males', 'Married Females', 'Single Females', 'Total'];
 
   barChartData: ChartData<'bar'> = {
     labels: this.barChartLabels,
     datasets: []
   };
   chartOptions: ChartOptions<'bar'> = {
     responsive: true,
     plugins: {
       legend: { position: 'top' }
     },
     scales: {
       y: {
         beginAtZero: true,
         ticks: {
           precision: 0
         }
       }
     }
   };
 ngOnInit(): void {
   const maleBeg = this.populationService.MaleTotalBeg || 0;
     const marriedFemalesBeg = this.populationService.marriedFemaleTotalBeg || 0;
     const singleFemalesBeg = this.populationService.singleFemailTotalBeg || 0;
     const totalBeg = maleBeg + marriedFemalesBeg + singleFemalesBeg;
 
     const maleEnd = this.populationService.MaleTotalEnd || 0;
     const marriedFemalesEnd = this.populationService.marriedFemaleTotalEnd || 0;
     const singleFemalesEnd = this.populationService.singleFemailTotalEnd || 0;
     const totalEnd = maleEnd + marriedFemalesEnd + singleFemalesEnd;
 
    
     this.barChartData = {
       labels: this.barChartLabels,
       datasets: [
         {
           label: `Starting Population as at ${this.formatDate(this.reportData?.reportPeriod?.startDate)}`,
           data: [maleBeg, marriedFemalesBeg, singleFemalesBeg, totalBeg],
           backgroundColor: '#4A90E2'
         },
         {
           label: `Ending population as at ${this.formatDate(this.reportData?.reportPeriod?.endDate)}`,
           data: [maleEnd, marriedFemalesEnd, singleFemalesEnd, totalEnd],
           backgroundColor: '#D0021B'
         }
       ]
     };
     
 }
 formatDate(date: string | undefined): string {
   if (!date) return 'N/A';  // fallback label if date is missing
   const d = new Date(date);
   return d.toLocaleDateString('en-GB'); // e.g. "15/06/2024"
 }
 
 }
