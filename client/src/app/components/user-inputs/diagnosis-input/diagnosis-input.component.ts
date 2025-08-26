import { Component, inject } from '@angular/core';
import { ReportService } from '../../../_services/reportPDF.service';
import { AccountService } from '../../../_services/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnosis-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagnosis-input.component.html',
  styleUrl: './diagnosis-input.component.css'
})
export class DiagnosisInputComponent {
  reportData = inject(ReportService)['reportDataSubject'].value;
  private accountService = inject (AccountService)
}
