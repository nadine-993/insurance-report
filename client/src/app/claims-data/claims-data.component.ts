import { Component } from '@angular/core';
import { claimsDataByMemberTypeAED } from '../_Models/claimsDataByMemberTypeAED';
import { claimsDataByMemberTypeNumber } from '../_Models/claimsDataByMemberTypeNumber';
import { claimsDataBydiagnosisGroupingtop10ByValue } from '../_Models/claimsDataByDiagnosisGroupingtop10byValue';
import { claimsDataByDiagnosisGroupingcorrespendList10ByValue } from '../_Models/claimsDataByDiagnosisGroupingcorrespendList10ByValue';
import { claimsDataByProviderTop10ByValue } from '../_Models/claimsDataByProviderTop10ByValue';
import { claimsDataByProviderCorrespondingTop10ByAEDValue } from '../_Models/claimsDataByProviderCorrespondingTop10ByAEDValue';
import { clainmsDataByNetworkUAEByAEDValue } from '../_Models/clainmsDataByNetworkUAEByAEDValue';
import { clainmsDataByNetworkUAEByNumber } from '../_Models/clainmsDataByNetworkUAEByNumber';
import {  nonUAEClaimsData } from '../_Models/nonUAEClaimsData';
import { totalCalimsProcessedPerServiceMonthByAEDValue } from '../_Models/totalCalimsProcessedPerServiceMonthByAEDValue';
import { PatientSupportProgram } from '../_Models/PatientSupportProgram';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-claims-data',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './claims-data.component.html',
  styleUrl: './claims-data.component.css'
})
export class ClaimsDataComponent {
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
    type:'prinicple',
    ip:159921,
    op:926093 ,
    pharmacy:'Included under OP',
    dental:37928 ,
    maternity:26546,
 },
 {
  id:'8c',
    type:'Spouce',
    ip:96224,
    op:294153 ,
    pharmacy:'Included under OP',
    dental:9892 ,
    maternity:142432 ,
 },]

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
    type:'Principle',
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
 },]

 ByDiagnosisGrouptop10byValue: claimsDataBydiagnosisGroupingtop10ByValue[]=[{
  id:'10a',
    group:'I10 Essential (primary) hypertension ',
    ip:0,
    op:77886 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },
 {
  id:'10b',
  group:'J06.9 Acute upper respiratory infection unspecified ',
    ip:4324,
    op:61105 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },
 {
  id:'10c',
  group:'O34.211 Maternal care for low transverse scar from previous cesarean delivery ',
    ip:0 ,
    op:0 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:37943,
 },

 {
  id:'10d',
  group:'M54.5 Low back pain ',
    ip:0 ,
    op:37124  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'10e',
  group:'E11.9 Type 2 diabetes mellitus without complications ',
    ip:0 ,
    op:36013  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'10f',
  group:'K80.12 Calculus of gallbladder with acute and chronic cholecystitis without obstru',
    ip:35570  ,
    op:413 ,
    pharmacy:'Included under OP',
    dental:22,
    maternity:178,
 },

 {
  id:'10g',
  group:'J20.9 Acute bronchitis unspecified ',
    ip:0 ,
    op:35434  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },


 {
  id:'10h',
  group:'I49.9 Cardiac arrhythmia unspecified ',
    ip:0 ,
    op:34231   ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

]


ByDiagnosisGroupList10ByValue: claimsDataByDiagnosisGroupingcorrespendList10ByValue[]=[{
  id:'11a',
    group:'I10 Essential (primary) hypertension',
    ip:0,
    op:102 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },
 {
  id:'11b',
  group:'J06.9 Acute upper respiratory infection unspecified  ',
    ip:2,
    op:199 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },
 {
  id:'11c',
  group:'J02.9 Acute pharyngitis unspecified ',
    ip:1 ,
    op:103 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'11d',
  group:'A09 Infectious gastroenteritis and colitis unspecified ',
    ip:5 ,
    op:40  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'11e',
  group:'O34.211 Maternal care for low transverse scar from previous cesarean delivery ',
    ip:0 ,
    op:0  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:5,
 },

 {
  id:'11f',
  group:'M54.5 Low back pain ',
    ip:0  ,
    op:64 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'11g',
  group:'E11.9 Type 2 diabetes mellitus without complications ',
    ip:0 ,
    op:23  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },


 {
  id:'11h',
  group:'K80.12 Calculus of gallbladder with acute and chronic cholecystitis without obstru ',
    ip:1 ,
    op:3   ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'11h',
  group:'J20.9 Acute bronchitis unspecified  ',
    ip:0 ,
    op:89,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },
 {
  id:'11h',
  group:'I49.9 Cardiac arrhythmia unspecified ',
    ip:0,
    op:0,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

]

ByProviderTop10byAED: claimsDataByProviderTop10ByValue[]=[{
  id:'12a',
    group:'Al Garhoud Private Hospital (Al Garhoud) - Dubai ',
    ip:86946 ,
    op:54414  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:414,
 },
 {
  id:'12b',
  group:'RAK Hospital (Al Juwais) Ras Al Khaimah ',
    ip:44448 ,
    op:56912 ,
    pharmacy:'Included under OP',
    dental:6616 ,
    maternity:11503 ,
 },
 {
  id:'12c',
  group:'J02.9 Acute pharyngitis unspecified ',
    ip:1 ,
    op:103 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'12d',
  group:'Medcare Hospital (Al Safa 1) Dubai ',
    ip:56691 ,
    op:48611  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'12e',
  group:'Medcare Women & Child Hospital (Al Safa 2) Dubai ',
    ip:36994  ,
    op:28135    ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:28318  ,
 },

 {
  id:'12f',
  group:'Medcare Hospital (King Faisal St.) Sharjah  ',
    ip:3911   ,
    op:41041  ,
    pharmacy:'Included under OP',
    dental:650,
    maternity:28289 ,
 },

 {
  id:'12g',
  group:'Emirates Specialty Hospital (Dubai Healthcare City) Dubai  ',
    ip:0 ,
    op:40177   ,
    pharmacy:'Included under OP',
    dental:4757 ,
    maternity:15019,
 },


 {
  id:'12i',
  group:'NMC Specialty Hospital (Al Nahda 2) Dubai ',
    ip:10071  ,
    op:22238  ,
    pharmacy:'Included under OP',
    dental:3672 ,
    maternity:16975 ,
 },

 {
  id:'12j',
  group:'RAK Hospital Pharmacy  ',
    ip:0 ,
    op:47971 ,
    pharmacy:'Included under OP',
    dental:110,
    maternity:4403 ,
 },
 {
  id:'12k',
  group:'JULFAR PHARMACY (AL JOLAN) RAS AL KHAIMAH ',
    ip:0,
    op:43975 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:838,
 },
 {
  id:'12l',
  group:'Mediclinic City Hospital (Dubai Healthcare City) - Dubai ',
    ip:35570 ,
    op:7538  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:838,
 },

]


ByProviderCorrospondingtoTop10ByAED: claimsDataByProviderCorrespondingTop10ByAEDValue[]=[{
  id:'13a',
    group:'Al Garhoud Private Hospital (Al Garhoud) - Dubai ',
    ip:9 ,
    op:100  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:1,
 },
 {
  id:'13b',
  group:'RAK Hospital (Al Juwais) Ras Al Khaimah  ',
    ip:9 ,
    op:109 ,
    pharmacy:'Included under OP',
    dental:9 ,
    maternity:16 ,
 },
 {
  id:'13c',
  group:'Medcare Hospital (Al Safa 1) Dubai  ',
    ip:3 ,
    op:49 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'13d',
  group:'Medcare Women & Child Hospital (Al Safa 2) Dubai ',
    ip:3 ,
    op:62  ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },

 {
  id:'13e',
  group:'Medcare Hospital (King Faisal St.) Sharjah ',
    ip:2  ,
    op:66    ,
    pharmacy:'Included under OP',
    dental:1,
    maternity:42  ,
 },

 {
  id:'13f',
  group:'Emirates Specialty Hospital (Dubai Healthcare City) Dubai  ',
    ip:0   ,
    op:92  ,
    pharmacy:'Included under OP',
    dental:7,
    maternity:8 ,
 },

 {
  id:'13g',
  group:'NMC Specialty Hospital (Al Nahda 2) Dubai  ',
    ip:2 ,
    op:49   ,
    pharmacy:'Included under OP',
    dental:7 ,
    maternity:25,
 },


 {
  id:'13i',
  group:'RAK Hospital Pharmacy ',
    ip:0  ,
    op:50  ,
    pharmacy:'Included under OP',
    dental:1 ,
    maternity:8 ,
 },

 {
  id:'13j',
  group:'JULFAR PHARMACY (AL JOLAN) RAS AL KHAIMAH   ',
    ip:0 ,
    op:18 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:1 ,
 },
 {
  id:'13k',
  group:'Mediclinic City Hospital (Dubai Healthcare City) - Dubai ',
    ip:1,
    op:15 ,
    pharmacy:'Included under OP',
    dental:0,
    maternity:0,
 },


]


ByNetworkUAEonlyByAED: clainmsDataByNetworkUAEByAEDValue[]=[{
  id:'14a',
    group:'In network   ',
    ip:367488  ,
    op:1463517 ,
    pharmacy:'Included under OP',
    dental:66003 ,
    maternity:168978,
 },
 {
  id:'14b',
  group:'Out of network  ',
    ip:822 ,
    op:7085  ,
    pharmacy:'Included under OP',
    dental:3854 ,
    maternity:0 ,
 },
]


ByNetworkUAEonlyByNumber: clainmsDataByNetworkUAEByNumber[]=[{
  id:'15a',
    group:'In network',
    ip:38  ,
    op:2764  ,
    pharmacy:'Included under OP',
    dental:151 ,
    maternity:199,
 },
 {
  id:'15b',
  group:'Out of network ',
    ip:2 ,
    op:26  ,
    pharmacy:'Included under OP',
    dental:10 ,
    maternity:3,
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
TotalClaimsProcessedperServicebyAEDvalue: totalCalimsProcessedPerServiceMonthByAEDValue[]=[{
  id:'17a',
  claim:'',
  monthEndDate:'JUNE',
  year:2024,
  value:136117, 
},
{
  id:'17b',
  claim:'',
  monthEndDate:'JULY',
  year:2024,
  value:317735, 
},
{
  id:'17c',
  claim:'',
  monthEndDate:'AUGUST',
  year:2024,
  value:179498, 
},
{
  id:'17d',
  claim:'',
  monthEndDate:'SEPTEMBER',
  year:2024,
  value:201819, 
},
{
  id:'17e',
  claim:'',
  monthEndDate:'OCTOBER',
  year:2024,
  value:296672, 
},
{
  id:'17f',
  claim:'',
  monthEndDate:'NOVEMBER',
  year:2024,
  value:206598, 
},

]
showChart = false;

toggleChart() {
  this.showChart = !this.showChart;
}

public pieChartLabels: string[] = ['June 2024', 'July 2024', 'August 2024', 'September 2024', 'October 2024', 'November 2024'];
public pieChartData: ChartData<'pie', number[],string>={
  labels:this.pieChartLabels,
  datasets:[
    {
      data:[136117, 317735, 179498, 201819, 296672, 206598]
    }
  ]
}; 
public pieChartOptions:ChartOptions<'pie'>={
  responsive:true,
  plugins:{
    legend:{
      position:'top',
    },
    title: {
      display:true,
      text:'Total Claims Processed per Service Month(AED)'
    }

  }

};
public pieChartType:'pie'= 'pie';


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
