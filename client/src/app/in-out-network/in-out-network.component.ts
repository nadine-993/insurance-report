import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { InOutNetworkService } from '../_services/inOutNetwork.service';

@Component({
  selector: 'app-in-out-network',
  standalone: true,
    imports: [CommonModule, NgChartsModule, ],
  templateUrl: './in-out-network.component.html',
  styleUrls: ['./in-out-network.component.css']
})
export class InOutNetworkComponent implements OnInit {

 inOutNetworkService= inject(InOutNetworkService)
    combinedDiagnosis: any[] = [];
    InOutNetwork:any[]=[];
  ngOnInit(): void {

  //initlizing in out network
const data = this.inOutNetworkService.ByNetworkUAEonlyByAED;
const totalValue = data.reduce((sum, item) => sum + item.total, 0);

this.InOutNetwork = [
  {
    label: 'Value',
    inNetwork: data.find(d => d.group.trim() === 'In network')?.total || 0,
    outOfNetwork: data.find(d => d.group.trim() === 'Out of network')?.total || 0,
  },
  {
    label: 'Percentage',
    inNetwork: `${((data.find(d => d.group.trim() === 'In network')?.total || 0) / totalValue * 100).toFixed(2)}%`,
    outOfNetwork: `${((data.find(d => d.group.trim() === 'Out of network')?.total || 0) / totalValue * 100).toFixed(2)}%`,
  }
];
//
  }

}
