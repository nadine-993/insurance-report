import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../../_services/reportPDF.service';
import { FullReport } from '../../../_Models/FullReport';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Top10conditionsChartComponent } from "../../charts-views/top10conditions-chart/top10conditions-chart.component";


@Component({
  selector: 'app-top10conditions',
  standalone: true,
  imports: [CommonModule, Top10conditionsChartComponent],
  templateUrl: './top10conditions.component.html',
  styleUrls: ['./top10conditions.component.css']
})
export class Top10conditionsComponent implements OnInit {

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

   
    });
  }


  get totalval(): number{

    return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='totals')?.total|| 0;
        
    }
 
}
