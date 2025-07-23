import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { ReportService } from '../../../_services/reportPDF.service';
import { PopulationService } from '../../../_services/population.service';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { PopulationChartComponent } from "../../charts-views/population-chart/population-chart.component";


@Component({
  selector: 'app-population',
  standalone: true,
  imports: [CommonModule, NgChartsModule, PopulationChartComponent],
  templateUrl: './population.component.html'
})
export class PopulationComponent{
  reportData = inject(ReportService)['reportDataSubject'].value;
  populationService = inject(PopulationService);


  get maleBeg() { return this.populationService.MaleTotalBeg; }
  get femaleBeg() { return this.populationService.marriedFemaleTotalBeg; }
  get singleBeg() { return this.populationService.singleFemailTotalBeg; }

  get maleEnd() { return this.populationService.MaleTotalEnd; }
  get femaleEnd() { return this.populationService.marriedFemaleTotalEnd; }
  get singleEnd() { return this.populationService.singleFemailTotalEnd; }



}