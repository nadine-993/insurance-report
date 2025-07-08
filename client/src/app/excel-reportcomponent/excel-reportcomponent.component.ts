import { Component, inject, OnInit } from '@angular/core';
import { PopulationService } from '../_services/population.service';
import { PopulationCensusEnd } from '../_Models/PopulationCensusEnd';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { AccountService } from '../_services/account.service';
import { ReportService } from '../_services/reportPDF.service';
import { FullReport } from '../_Models/FullReport';
import { ClaimsComponent } from '../claims/claims.component';
import { ClaimspermonthComponent } from '../claimspermonth/claimspermonth.component';
import { InoutnetworkComponent } from '../inoutnetwork/inoutnetwork.component';
import { PopulationComponent } from '../population/population.component';
import { ClaimsdistributionComponent } from "../claimsdistribution/claimsdistribution.component";
import { Top10ProvidersComponent } from "../top10providers/top10providers.component";
import { Top10conditionsComponent } from "../top10conditions/top10conditions.component";

@Component({
  selector: 'app-excel-reportcomponent',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, CommonModule, ClaimsComponent, ClaimspermonthComponent, InoutnetworkComponent, PopulationComponent, ClaimsdistributionComponent, Top10ProvidersComponent, Top10conditionsComponent],
  templateUrl: './excel-reportcomponent.component.html',
  styleUrls: ['./excel-reportcomponent.component.css']
})
export class ExcelReportcomponentComponent implements OnInit {

  public populationService= inject(PopulationService);
    private accountService = inject(AccountService);
    reportService=inject(ReportService);

      reportData: FullReport | null = null;

      


  ngOnInit(): void {
    this.accountService.getCurrentUser().subscribe({
      next: user => console.log('✅ Current user:', user),
      error: err => console.error('❌ Error fetching current user', err)
    });

    this.reportService.reportData$.subscribe((data) => {
      if (data) {
        this.reportData = data;
        this.populationService.processPopulationDataBeg(data.populationCensusBeg);
        this.populationService.processPopulationDataEnd(data.populationCensusEnd);
      }
    });
  }
}