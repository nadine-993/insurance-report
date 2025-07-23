import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../../_services/reportPDF.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ClaimspermonthChartComponent } from "../../charts-views/claimspermonth-chart/claimspermonth-chart.component";

@Component({
  selector: 'app-claimspermonth',
  standalone: true,
  imports: [CommonModule, NgChartsModule, ClaimspermonthChartComponent],
  templateUrl: './claimspermonth.component.html',
  styleUrls: ['./claimspermonth.component.css']
})
export class ClaimspermonthComponent   {
  reportData = inject(ReportService)['reportDataSubject'].value;
  get claimsProcessed(): number {
    return this.reportData?.totalValues.claimsProcessed || 1;
  }
  

  
}

