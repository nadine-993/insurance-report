import { Component, inject, OnInit } from '@angular/core';
import { ProviderService } from '../_services/topProvider.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-top-providers',
   standalone:true,
    imports: [CommonModule, NgChartsModule, ],
  templateUrl: './top-providers.component.html',
  styleUrls: ['./top-providers.component.css']
})
export class TopProvidersComponent implements OnInit {

  combinedProviders: any[] = [];
  providerservice=inject(ProviderService);
  

  ngOnInit(): void {
    

    // initialziing the top 10 providors
  this.providerservice.initializecombinedProviders(); 
  this.combinedProviders=this.providerservice.combinedProviders;
  console.log('Loaded Provider:', this.combinedProviders);
  }

}
