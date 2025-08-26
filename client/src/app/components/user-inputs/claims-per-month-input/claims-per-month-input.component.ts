import { Component, inject } from '@angular/core';
import { ReportService } from '../../../_services/reportPDF.service';
import { AccountService } from '../../../_services/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claims-per-month-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claims-per-month-input.component.html',
  styleUrl: './claims-per-month-input.component.css'
})
export class ClaimsPerMonthInputComponent {
  reportData = inject(ReportService)['reportDataSubject'].value;
  private accountService = inject (AccountService)
}
