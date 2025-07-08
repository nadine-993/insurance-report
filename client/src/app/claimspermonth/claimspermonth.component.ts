import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../_services/reportPDF.service';

@Component({
  selector: 'app-claimspermonth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claimspermonth.component.html',
  styleUrls: ['./claimspermonth.component.css']
})
export class ClaimspermonthComponent   {
  reportData = inject(ReportService)['reportDataSubject'].value;
  get claimsProcessed(): number {
    return this.reportData?.totalValues.claimsProcessed || 1;
  }
}
