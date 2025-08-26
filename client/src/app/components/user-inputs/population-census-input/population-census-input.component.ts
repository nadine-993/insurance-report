import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../_services/account.service';
import { ReportService } from '../../../_services/reportPDF.service';
import { FullReport } from '../../../_Models/FullReport';
import { PopulationService } from '../../../_services/population.service';



@Component({
  selector: 'app-population-census-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './population-census-input.component.html',
  styleUrl: './population-census-input.component.css'
})


export class PopulationCensusInputComponent {

private accountService = inject (AccountService)
  reportService=inject(ReportService);
  public populationService= inject(PopulationService);
  reportData: FullReport | null = null;
}
  
  

