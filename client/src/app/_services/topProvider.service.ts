// src/app/_services/claims-data.service.ts
import { Component, Injectable, OnInit } from '@angular/core';
import { claimsDataByProviderCorrespondingTop10ByAEDValue } from '../_Models/ProviderNumbers';
import { claimsDataByProviderTop10ByValue } from '../_Models/ProviderValues';

@Injectable({
  providedIn: 'root'
})
export class ProviderService  {
    combinedProviders: any[] = [];

    initializecombinedProviders():void{
        this.combinedProviders = this.ByProviderTop10byAED.map(provider => {
          const corresponding = this.ByProviderCorrospondingtoTop10ByAED.find(p => p.group === provider.group);
          return {
            group: provider.group,
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


}