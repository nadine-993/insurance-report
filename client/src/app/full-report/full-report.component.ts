import { Component } from '@angular/core';
import { ReportSummaryComponent } from "../report-summary/report-summary.component";
import { PopulationCensusComponent } from "../population-census/population-census.component";
import { ClaimsDataComponent } from "../claims-data/claims-data.component";

@Component({
  selector: 'app-full-report',
  standalone: true,
  imports: [ReportSummaryComponent, PopulationCensusComponent, ClaimsDataComponent],
  templateUrl: './full-report.component.html',
  styleUrl: './full-report.component.css'
})
export class FullReportComponent {

}
