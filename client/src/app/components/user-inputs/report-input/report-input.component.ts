import { Component, inject } from '@angular/core';
import { AccountService } from '../../../_services/account.service';
import { ReportService } from '../../../_services/reportPDF.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-input.component.html',
  styleUrl: './report-input.component.css'
})
export class ReportInputComponent {
private accountServie = inject (AccountService)
reportData = inject(ReportService)['reportDataSubject'].value;

}
