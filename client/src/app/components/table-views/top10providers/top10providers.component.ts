import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { ReportService } from '../../../_services/reportPDF.service';
import { FullReport } from '../../../_Models/FullReport';
import { Top10providersChartComponent } from "../../charts-views/top10providers-chart/top10providers-chart.component";

@Component({
  selector: 'app-top10providers',
  templateUrl: './top10providers.component.html',
  imports: [CommonModule, NgChartsModule, Top10providersChartComponent],
  styleUrls: ['./top10providers.component.css'],
  standalone: true
})
export class Top10ProvidersComponent implements OnInit {
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

  totalClaims = 0;

  ngOnInit(): void {
    this.reportService.reportData$.subscribe((data: FullReport | null) => {
      if (!data || !data.partII) return;

      const providerValues = data.partII.providerValues;
      const providerNumbers = data.partII.providerNumbers;

      // Calculate total value for percentage calculations
      this.totalClaims = providerValues.reduce((sum, p) => sum + p.total, 0);

      const mergedMap = new Map<string, any>();
      const topProviders = this.mergedData
  .sort((a, b) => b.total - a.total)
  .slice(0, 10); // top 10




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
    });
 
    
  }
  get totalval(): number{

    return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='totals')?.total|| 0;
        
    }
 
  
  }
