// src/app/_services/claims-data.service.ts
import { Component, Injectable, OnInit } from '@angular/core';
import { claimsDataByMemberTypeAED } from '../_Models/MemberTypeValues';
import { claimsDataByMemberTypeNumber } from '../_Models/MemberTypeNumbers';
import { claimsDataBydiagnosisGroupingtop10ByValue } from '../_Models/DiagnosisValues';
import { claimsDataByDiagnosisGroupingcorrespendList10ByValue } from '../_Models/DiagnosisNumbers';
import { claimsDataByProviderTop10ByValue } from '../_Models/ProviderValues';
import { claimsDataByProviderCorrespondingTop10ByAEDValue } from '../_Models/ProviderNumbers';
import { clainmsDataByNetworkUAEByAEDValue } from '../_Models/NetworkValues';
import { clainmsDataByNetworkUAEByNumber } from '../_Models/NetworkNumbers';
import { nonUAEClaimsData } from '../_Models/NonUAEClaims';
import { totalCalimsProcessedPerServiceMonthByAEDValue } from '../_Models/ClaimsPerServiceMonth';
import { PatientSupportProgram } from '../_Models/PatientSupportPrograms';
import { ChartData, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ReportSummary } from '../_Models/PolicyPeriod';
import { populationCensusEnd } from '../_Models/PopulationCensusEnd';
import { populationCensusBegin } from '../_Models/PopulationCensusBeg';

@Injectable({
  providedIn: 'root'
})
export class ClaimsDataService  {



  reports:  ReportSummary[]=[
        {
          id: 1,
          schemeName: 'ACME Platinum',
          policyNumber: 12345678,
          initialPolicyEffectiveDate: new Date,
          policyEffectiveDate: new Date,
          policyExpiredDate: new Date,
          valueOfClaimsProcessed: 1903412,
          claimsReportedNotProcessed: 174335,
          claimsNotReported: 7000
        },
        {
          id: 2,
          schemeName: 'ACME Platinum',
          policyNumber: 12345678,
          initialPolicyEffectiveDate: new Date,
          policyEffectiveDate: new Date,
          policyExpiredDate: new Date,
          valueOfClaimsProcessed: 1903412,
          claimsReportedNotProcessed: 174335,
          claimsNotReported: 7000
        },
      ]

  

NonUAEClaimsData: nonUAEClaimsData[]=[{

    id:'16a',
    group:'By value (AED) ',
    ip:0  ,
    op:0  ,
    pharmacy:'Included under OP',
    dental:0 ,
    maternity:0,
},
{

  id:'16b',
  group:'By number ',
  ip:0  ,
  op:0  ,
  pharmacy:'Included under OP',
  dental:0 ,
  maternity:0,
}

]



PatientSupportPrograms: PatientSupportProgram[]=[{
  id:'18a',
  program:'Number of members enrolled in BASMAH initiative',
},

{
  id:'18b',
  program:'Number of members screened in BASMAH initiative',
},
{
  id:'18c',
  program:'Number members enrolled in HCV initiative',
},
{
  id:'18d',
  program:'Number of members screened for HCV',
},
]


}
