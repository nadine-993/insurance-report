import { Component, OnInit, inject } from '@angular/core';
import { ReportService } from '../_services/reportPDF.service';
import { ProviderValues } from '../_Models/ProviderValues';
import { ProviderNumbers } from '../_Models/ProviderNumbers';
import { FullReport } from '../_Models/FullReport';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top10providers',
  templateUrl: './top10providers.component.html',
  imports: [CommonModule],
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
