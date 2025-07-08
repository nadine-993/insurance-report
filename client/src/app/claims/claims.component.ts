import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../_services/reportPDF.service';
import { PopulationService } from '../_services/population.service';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule],
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
