import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../../_services/reportPDF.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { ClaimsdistributionChartComponent } from '../../charts-views/claimsdistribution-chart/claimsdistribution-chart.component';

@Component({
  selector: 'app-claimsdistribution',
  standalone: true,
  imports: [CommonModule, ClaimsdistributionChartComponent],
  templateUrl: './claimsdistribution.component.html',
  styleUrls: ['./claimsdistribution.component.css']
})
export class ClaimsdistributionComponent  {

  reportData= inject(ReportService)['reportDataSubject'].value

 get optotalval(): number{

return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='totals')?.op|| 0;

 }

 get iptotalval(): number{

  return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='totals')?.ip|| 0;
  
   }

get dentaltotalval(): number{

  return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='totals')?.dental|| 0;
    
  }
get maternitytotalval(): number{

  return this.reportData?.partII.memberTypeValues.find(n=>n.memberType.trim()==='totals')?.maternity|| 0;
      
  }

   
get optotalnum(): number{

  return this.reportData?.partII.memberTypeNumbers.find(n=>n.memberType.trim()==='totals')?.op|| 0;
        
  }
        
get iptotalnum(): number{
        
  return this.reportData?.partII.memberTypeNumbers.find(n=>n.memberType.trim()==='totals')?.ip|| 0;
          
  }
        
get dentaltotalnum(): number{
        
  return this.reportData?.partII.memberTypeNumbers.find(n=>n.memberType.trim()==='totals')?.dental|| 0;
            
  }
get maternitytotalnum(): number{
        
  return this.reportData?.partII.memberTypeNumbers.find(n=>n.memberType.trim()==='totals')?.maternity|| 0;
              
  }
  get totalClaims(): number {
    return this.optotalval + this.iptotalval + this.dentaltotalval + this.maternitytotalval;
  }

}
