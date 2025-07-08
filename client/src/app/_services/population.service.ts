import { Injectable, signal } from '@angular/core';
import { PopulationSummary } from '../_Models/PopulationSummary';
import { PopulationCensusEnd } from '../_Models/PopulationCensusEnd';
import { PopulationCensusBeg } from '../_Models/PopulationCensusBeg';


@Injectable({
  providedIn: 'root'
})
export class PopulationService {
  private _begSummaries = signal<PopulationSummary[]>([]);
  private _endSummaries = signal<PopulationSummary[]>([]);

  population: number = 0;

  // the census at the end of report
  marriedFemaleTotalEnd: number = 0;
  singleFemailTotalEnd: number = 0;
  MaleTotalEnd: number = 0;
//the census in the beggining of report
  marriedFemaleTotalBeg: number = 0;
  singleFemailTotalBeg: number = 0;
  MaleTotalBeg: number = 0;

  setPopulationDataBeg(data: PopulationCensusBeg[]) {
    const grouped = data.reduce((acc: { [key: string]: number }, entry) => {
      const sum = entry.from0To15 + entry.from16To25 + entry.from26To35 + entry.from36To50 + entry.from51To65 + entry.over65;
      acc[entry.gender] = (acc[entry.gender] || 0) + sum;
      return acc;
    }, {});

    const result: PopulationSummary[] = Object.entries(grouped).map(([gender, total]) => ({
      gender,
      total
    }));

    this._begSummaries.set(result);
  }

  setPopulationDataEnd(data: PopulationCensusEnd[]) {
    const grouped = data.reduce((acc: { [key: string]: number }, entry) => {
      const sum = entry.from0To15 + entry.from16To25 + entry.from26To35 + entry.from36To50 + entry.from51To65 + entry.over65;
      acc[entry.gender] = (acc[entry.gender] || 0) + sum;
      return acc;
    }, {});

    const result: PopulationSummary[] = Object.entries(grouped).map(([gender, total]) => ({
      gender,
      total
    }));

    this._endSummaries.set(result);
  }

  get begSummaries() {
    return this._begSummaries.asReadonly();
  }

  get endSummaries() {
    return this._endSummaries.asReadonly();
  }

  getSummaryByGender(source: 'beg' | 'end', gender: string): number {
    const data = source === 'beg' ? this._begSummaries() : this._endSummaries();
    return data.find(s => s.gender === gender)?.total || 0;
  }

  processPopulationDataBeg(censusBeg: PopulationCensusBeg[]): number {
    this.setPopulationDataBeg(censusBeg);

    const male = this.getSummaryByGender('beg', 'male');
    const single = this.getSummaryByGender('beg', 'single females');
    const married = this.getSummaryByGender('beg', 'married females');

    this.MaleTotalBeg = male;
    this.singleFemailTotalBeg = single;
    this.marriedFemaleTotalBeg = married;
    this.population = male + single + married;

    return this.population;
  }

  processPopulationDataEnd(censusEnd: PopulationCensusEnd[]): number {
    this.setPopulationDataEnd(censusEnd);

    const male = this.getSummaryByGender('end', 'male');
    const single = this.getSummaryByGender('end', 'single females');
    const married = this.getSummaryByGender('end', 'married females');

    this.MaleTotalEnd = male;
    this.singleFemailTotalEnd = single;
    this.marriedFemaleTotalEnd = married;
    this.population = male + single + married;

    return this.population;
  }
}
