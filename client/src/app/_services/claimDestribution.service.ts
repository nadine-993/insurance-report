// src/app/_services/claims-data.service.ts
import { Component, Injectable, OnInit } from '@angular/core';
import { claimsDataByMemberTypeAED } from '../_Models/claimsDataByMemberTypeAED';
import { claimsDataByMemberTypeNumber } from '../_Models/claimsDataByMemberTypeNumber';
import { claimsDataBydiagnosisGroupingtop10ByValue } from '../_Models/claimsDataByDiagnosisGroupingtop10byValue';
import { claimsDataByDiagnosisGroupingcorrespendList10ByValue } from '../_Models/claimsDataByDiagnosisGroupingcorrespendList10ByValue';
import { claimsDataByProviderTop10ByValue } from '../_Models/claimsDataByProviderTop10ByValue';
import { claimsDataByProviderCorrespondingTop10ByAEDValue } from '../_Models/claimsDataByProviderCorrespondingTop10ByAEDValue';
import { clainmsDataByNetworkUAEByAEDValue } from '../_Models/clainmsDataByNetworkUAEByAEDValue';
import { clainmsDataByNetworkUAEByNumber } from '../_Models/clainmsDataByNetworkUAEByNumber';
import { nonUAEClaimsData } from '../_Models/nonUAEClaimsData';
import { totalCalimsProcessedPerServiceMonthByAEDValue } from '../_Models/totalCalimsProcessedPerServiceMonthByAEDValue';
import { PatientSupportProgram } from '../_Models/PatientSupportProgram';
import { ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ReportSummary } from '../_Models/report-summary';
import { populationCensusEnd } from '../_Models/population-census-end';
import { populationCensusBegin } from '../_Models/population-census-begin';

@Injectable({
  providedIn: 'root'
})
export class claimsDistributionService  {
  claimsdistribution: any[]=[];
 
 
  
  initializeclaimsDistribution():void{
    this.claimsdistribution = this.BymemebertypeAED.map(provider => {
      const corresponding = this.Bymemebertypenumber.find(p => p.type === provider.type);
      return {
        type: provider.type,
        ipValue: provider.ip,
        opValue: provider.op,
        dentalValue: provider.dental,
        maternityValue: provider.maternity,
        ipCount: corresponding?.ip ?? 0,
        opCount: corresponding?.op ?? 0,
        dentalCount: corresponding?.dental ?? 0,
        maternityCount: corresponding?.maternity ?? 0


    };
});


}

           
 BymemebertypeAED: claimsDataByMemberTypeAED[]=[{
    id:'8a',
      type:'Child',
      ip:112165,
      op:250356,
      pharmacy:'Included under OP',
      dental:22037,
      maternity:0,
   },
   {
    id:'8b',
      type:'Prinicple',
      ip:159921,
      op:926093 ,
      pharmacy:'Included under OP',
      dental:37928 ,
      maternity:26546,
   },
   {
    id:'8c',
      type:'Spouse',
      ip:96224,
      op:294153 ,
      pharmacy:'Included under OP',
      dental:9892 ,
      maternity:142432 ,
   },
   {
   id:'8d',
      type:'Total',
      ip:368310,
      op:1470602,
      pharmacy:'Included under OP',
      dental:69857,
      maternity:168978,
   },
  ]
  
   Bymemebertypenumber: claimsDataByMemberTypeNumber[]=[{
    id:'9a',
      type:'Child',
      ip:14,
      op:727,
      pharmacy:'Included under OP',
      dental:52,
      maternity:0,
   },
   {
    id:'9b',
      type:'Prinicple',
      ip:14,
      op:1479,
      pharmacy:'Included under OP',
      dental:87,
      maternity:24,
   },
   {
    id:'9c',
      type:'Spouse',
      ip:12,
      op:584,
      pharmacy:'Included under OP',
      dental:22,
      maternity:178,
   },
   {
    id:'9d',
       type:'Total',
       ip:40,
       op:2790,
       pharmacy:'Included under OP',
       dental:161,
       maternity:202,
    },
  
  ]

  
  }