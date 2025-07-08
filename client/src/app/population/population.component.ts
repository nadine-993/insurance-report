import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../_services/reportPDF.service';
import { PopulationService } from '../_services/population.service';

@Component({
  selector: 'app-population',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './population.component.html'
})
export class PopulationComponent {
  reportData = inject(ReportService)['reportDataSubject'].value;
  populationService = inject(PopulationService);

  get maleBeg() { return this.populationService.MaleTotalBeg; }
  get femaleBeg() { return this.populationService.marriedFemaleTotalBeg; }
  get singleBeg() { return this.populationService.singleFemailTotalBeg; }

  get maleEnd() { return this.populationService.MaleTotalEnd; }
  get femaleEnd() { return this.populationService.marriedFemaleTotalEnd; }
  get singleEnd() { return this.populationService.singleFemailTotalEnd; }
}