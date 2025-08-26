import { Component, inject } from '@angular/core';
import { AccountService } from '../../../_services/account.service';
import { ReportService } from '../../../_services/reportPDF.service';
import { FullReport } from '../../../_Models/FullReport';
import { PopulationService } from '../../../_services/population.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-type-input',
  standalone: true,
  imports:  [ CommonModule],
  templateUrl: './member-type-input.component.html',
  styleUrl: './member-type-input.component.css'
})
export class MemberTypeInputComponent {

  reportData = inject(ReportService)['reportDataSubject'].value;
  private accountService = inject (AccountService)
}
