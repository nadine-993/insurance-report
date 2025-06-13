import { Component, inject, OnInit } from '@angular/core';
import { claimsDistributionService } from '../_services/claimDestribution.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-claims-distribution',
   standalone:true,
    imports: [CommonModule, NgChartsModule, ],
  templateUrl: './claims-distribution.component.html',
  styleUrls: ['./claims-distribution.component.css']
})
export class ClaimsDistributionComponent implements OnInit {

 claimsdistributionService= inject(claimsDistributionService)
     combinedDiagnosis: any[] = [];
     claimsDistrub: any[]=[];

  ngOnInit(): void {
      //initilizing claims distbution
  const dataAED = this.claimsdistributionService.BymemebertypeAED.find(d => d.type === 'Total');
  const dataCount = this.claimsdistributionService.Bymemebertypenumber.find(d => d.type === 'Total');
  
  const totalAED = (dataAED?.ip || 0) + (dataAED?.op || 0) + (dataAED?.dental || 0) + (dataAED?.maternity || 0);
  
  this.claimsDistrub = [
    {
      category: 'Out Patient Including Pharmacy',
      value: dataAED?.op || 0,
      count: dataCount?.op || 0,
      percentage: `${Math.round((dataAED?.op || 0) / totalAED * 100)}%`
    },
    {
      category: 'In Patient',
      value: dataAED?.ip || 0,
      count: dataCount?.ip || 0,
      percentage: `${Math.round((dataAED?.ip || 0) / totalAED * 100)}%`
    },
    {
      category: 'Dental',
      value: dataAED?.dental || 0,
      count: dataCount?.dental || 0,
      percentage: `${Math.round((dataAED?.dental || 0) / totalAED * 100)}%`
    },
    {
      category: 'Maternity',
      value: dataAED?.maternity || 0,
      count: dataCount?.maternity || 0,
      percentage: `${Math.round((dataAED?.maternity || 0) / totalAED * 100)}%`
    }
  ];
  }

}
