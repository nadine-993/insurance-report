
import { PartII } from "./ PartII";
import { PolicyPeriod } from "./PolicyPeriod";
import { PopulationCensusBeg } from "./PopulationCensusBeg";
import { PopulationCensusEnd } from "./PopulationCensusEnd";
import { ReportPeriod } from "./ReportPeriod";
import { TotalValues } from "./TotalValues";


export interface FullReport{
    id: number;
    schemeEmployerName: string | null;
    insurer: string | null;
    policyNumber: string; 
    policyPeriod: PolicyPeriod;
    reportPeriod: ReportPeriod;
    totalValues: TotalValues;
    populationCensusBeg:PopulationCensusBeg [];
    populationCensusEnd:PopulationCensusEnd [];
    partII: PartII;

}
