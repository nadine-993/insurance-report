import { Component, inject } from '@angular/core';
import { ReportService } from '../../../_services/reportPDF.service';
import { AccountService } from '../../../_services/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-network-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network-input.component.html',
  styleUrl: './network-input.component.css'
})
export class NetworkInputComponent {

  reportData = inject(ReportService)['reportDataSubject'].value;
  private accountService = inject (AccountService)
}

