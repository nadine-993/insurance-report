import { Component, inject, OnInit } from '@angular/core';
import { ReportService } from '../../../_services/reportPDF.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ClaimspermonthChartComponent } from '../../charts-views/claimspermonth-chart/claimspermonth-chart.component';
import { FullReport } from '../../../_Models/FullReport';

@Component({
  selector: 'app-claimspermembershiptype',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './claimspermembershiptype.component.html',
  styleUrls: ['./claimspermembershiptype.component.css']
})
export class ClaimspermembershiptypeComponent {

  reportData = inject(ReportService)['reportDataSubject'].value;

  get totalNumberOfEmployees(): any {
    return this.reportData?.totalNumberOfEmployees ;
  }

  get totalNumberOfDependents(): any {
    return this.reportData?.totalNumberOfDependents ;
  }
  get totalNumberOfSpouse(): any {
    return this.reportData?.totalNumberOfSpouse ;
  }

  get totalClaimsperMembership(): number {
    return this.totalNumberOfEmployees + this.totalNumberOfDependents +this.totalNumberOfSpouse
  }

  get principleTotalNumber(): number{

  return this.reportData?.partII.memberTypeNumbers.find( n=> n.memberType.trim() === 'employee')?.total|| 0;
    
  }
     get spouseTotalNumber(): number{

    return this.reportData?.partII.memberTypeNumbers.find(n=>n.memberType.trim()==='spouse')?.total|| 0;
      
  }
       get ChildTotalNumber(): number{

    return this.reportData?.partII.memberTypeNumbers.find(n=>n.memberType.trim()==='dependents')?.total|| 0;
        
  }
  get claimTotalNumber(): number{

    return this.reportData?.partII.memberTypeNumbers.find(n=>n.memberType.trim()==='totals')?.total|| 0;
        
  }


  get principleTotalValue(): number{

  return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim() === 'employee')?.total|| 0;
    
  }
   get spouseTotalValue(): number{

  return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='spouse')?.total|| 0;
      
  }
    get childTotalValue(): number{

    return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='dependents')?.total|| 0;
        
  }

  get claimTotalValue(): number{

    return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='totals')?.total|| 0;
        
  }



}
