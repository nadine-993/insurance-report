import { Component, inject, OnInit } from '@angular/core';
import { ConditionService } from '../_services/topConditions.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-top-conditions',
   standalone:true,
  imports: [CommonModule, NgChartsModule, ],
  templateUrl: './top-conditions.component.html',
  styleUrls: ['./top-conditions.component.css']
})
export class TopConditionsComponent implements OnInit {

  combinedDiagnosis: any[] = [];
    conditionservice=inject(ConditionService);
  

  ngOnInit(): void {

// initilizing the top10 condition sheet
this.conditionservice.initializeCombinedDiagnosis();
this.combinedDiagnosis = this.conditionservice.combinedDiagnosis;
console.log('Loaded Diagnosis:', this.combinedDiagnosis);



  }

}
