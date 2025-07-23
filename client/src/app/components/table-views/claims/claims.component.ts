import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../../_services/reportPDF.service';
import { PopulationService } from '../../../_services/population.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { ClaimsChartComponent } from "../../charts-views/claims-chart/claims-chart.component";

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule, NgChartsModule, ClaimsChartComponent],
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {
  reportData = inject(ReportService)['reportDataSubject'].value;
  population = inject(PopulationService).population;
  memberTotalCount: number | null = null;

   
  ngOnInit(): void {
    const totalEntry = this.reportData?.partII?.memberTypeNumbers.find(m => m.memberType === 'totals');
    this.memberTotalCount = totalEntry?.total || null;

   

  }
}
