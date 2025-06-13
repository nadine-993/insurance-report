
// src/app/_services/claims-data.service.ts
import { Component, Injectable, OnInit } from '@angular/core';
import { populationCensusEnd } from '../_Models/population-census-end';
import { populationCensusBegin } from '../_Models/population-census-begin';
import { totalCalimsProcessedPerServiceMonthByAEDValue } from '../_Models/totalCalimsProcessedPerServiceMonthByAEDValue';
import { ChartData, ChartOptions } from 'chart.js';

@Injectable({
  providedIn: 'root'
})

export class ClaimsMonthlyService{
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

}


