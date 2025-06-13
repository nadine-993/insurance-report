import { Component, inject, OnInit } from '@angular/core';
import { PopulationService } from '../_services/population.service';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-population',
  standalone:true,
  imports: [CommonModule, NgChartsModule, ],
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  populationservice=inject(PopulationService);
   
    population:any[]=[];
  ngOnInit(): void {

    const start = this.populationservice.censusBegin;
     const end = this.populationservice.censusEnd;

const categories = ['Male', 'Married Females', 'Single Females'];

this.population = categories.map(category => {
  const startData = start.find(c => c.status === category);
  const endData = end.find(c => c.status === category);

  const startTotal = (startData?.agenullto15 ?? 0) + (startData?.age16to25 ?? 0) +
                     (startData?.age26to35 ?? 0) + (startData?.age36to50 ?? 0) +
                     (startData?.age51to65 ?? 0) + (startData?.ageover65 ?? 0);

  const endTotal = (endData?.agenullto15 ?? 0) + (endData?.age16to25 ?? 0) +
                   (endData?.age26to35 ?? 0) + (endData?.age36to50 ?? 0) +
                   (endData?.age51to65 ?? 0) + (endData?.ageover65 ?? 0);

  const growth = startTotal > 0 ? (((endTotal - startTotal) / startTotal) * 100).toFixed(2) : '0.00';

  return {
    category,
    start: startTotal,
    end: endTotal,
    growth: `${growth}%`
  };
});

const totalStart = this.population.reduce((sum, row) => sum + row.start, 0);
const totalEnd = this.population.reduce((sum, row) => sum + row.end, 0);
const totalGrowth = totalStart > 0 ? (((totalEnd - totalStart) / totalStart) * 100).toFixed(2) : '0.00';

this.population.push({
  category: 'Total',
  start: totalStart,
  end: totalEnd,
  growth: `${totalGrowth}%`
});

  }

}
