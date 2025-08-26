import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ReportService } from '../../../_services/reportPDF.service';
import { AccountService } from '../../../_services/account.service';


@Component({
  selector: 'app-provider-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provider-input.component.html',
  styleUrl: './provider-input.component.css'
})
export class ProviderInputComponent {

reportData = inject(ReportService)['reportDataSubject'].value;
  private accountService = inject (AccountService)
}


