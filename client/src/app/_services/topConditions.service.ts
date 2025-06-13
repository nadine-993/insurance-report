
// src/app/_services/claims-data.service.ts
import { Component, Injectable, OnInit } from '@angular/core';
import { populationCensusEnd } from '../_Models/population-census-end';
import { populationCensusBegin } from '../_Models/population-census-begin';
import { claimsDataByDiagnosisGroupingcorrespendList10ByValue } from '../_Models/claimsDataByDiagnosisGroupingcorrespendList10ByValue';
import { claimsDataBydiagnosisGroupingtop10ByValue } from '../_Models/claimsDataByDiagnosisGroupingtop10byValue';

@Injectable({
  providedIn: 'root'
})


export class ConditionService{
    combinedDiagnosis: any[] = [];



    initializeCombinedDiagnosis(): void {
        this.combinedDiagnosis = this.ByDiagnosisGrouptop10byValue.map(provider => {
          const corresponding = this.ByDiagnosisGroupList10ByValue.find(p => p.group.trim() === provider.group.trim());
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


    ByDiagnosisGrouptop10byValue: claimsDataBydiagnosisGroupingtop10ByValue[]=[{
        id:'10a',
          group:'I10 Essential (primary) hypertension',
          ip:0,
          op:77886 ,
          pharmacy:'Included under OP',
          dental:0,
          maternity:0,
       },
       {
        id:'10b',
        group:'J06.9 Acute upper respiratory infection unspecified',
          ip:4324,
          op:61105 ,
          pharmacy:'Included under OP',
          dental:0,
          maternity:0,
       },
       {
        id:'10c',
        group:'J02.9 Acute pharyngitis unspecified',
          ip:4324,
          op:8267,
          pharmacy:'Included under OP',
          dental:0,
          maternity:43946,
       },
      
       {
        id:'10d',
        group:'A09 Infectious gastroenteritis and colitis unspecified',
          ip:28922 ,
          op:15024  ,
          pharmacy:'Included under OP',
          dental:0,
          maternity:43946,
       },
      
       {
        id:'10e',
        group:'O34.211 Maternal care for low transverse scar from previous cesarean delivery',
          ip:0 ,
          op:0 ,
          pharmacy:'Included under OP',
          dental:0,
          maternity:37943,
       },
      
       {
        id:'10f',
        group:'M54.5 Low back pain',
          ip:0,
          op:37124,
          pharmacy:'Included under OP',
          dental:0,
          maternity:0,
       },
      
       {
        id:'10g',
        group:'E11.9 Type 2 diabetes mellitus without complications',
          ip:0 ,
          op:36013  ,
          pharmacy:'Included under OP',
          dental:0,
          maternity:0,
       },
      
      
       {
        id:'10h',
        group:'K80.12 Calculus of gallbladder with acute and chronic cholecystitis without obstru',
          ip:35570 ,
          op:413 ,
          pharmacy:'Included under OP',
          dental:0,
          maternity:0,
       },
      
       {
        id:'10i',
        group:'J20.9 Acute bronchitis unspecified',
          ip:0 ,
          op:35434 ,
          pharmacy:'Included under OP',
          dental:0,
          maternity:0,
       },
      
       {
        id:'10j',
        group:'I49.9 Cardiac arrhythmia unspecified',
          ip:0 ,
          op:34231 ,
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
        group:'J06.9 Acute upper respiratory infection unspecified',
          ip:2,
          op:199 ,
          pharmacy:'Included under OP',
          dental:0,
          maternity:0,
       },
       {
        id:'11c',
        group:'J02.9 Acute pharyngitis unspecified',
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
        id:'11i',
        group:'J20.9 Acute bronchitis unspecified  ',
          ip:0 ,
          op:89,
          pharmacy:'Included under OP',
          dental:0,
          maternity:89,
       },
       {
        id:'11j',
        group:'I49.9 Cardiac arrhythmia unspecified ',
          ip:0,
          op:18,
          pharmacy:'Included under OP',
          dental:0,
          maternity:18,
       },
      
      ]
}




 