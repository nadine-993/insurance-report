import { ClaimsPerServiceMonth } from "./ClaimsPerServiceMonth";
import { DiagnosisNumbers } from "./DiagnosisNumbers";
import { DiagnosisValues } from "./DiagnosisValues";
import { MemberTypeNumbers } from "./MemberTypeNumbers";
import { MemberTypeValues } from "./MemberTypeValues";
import { NetworkNumbers } from "./NetworkNumbers";
import { NetworkValues } from "./NetworkValues";
import { NonUAEClaims } from "./NonUAEClaims";
import { PatientSupportPrograms } from "./PatientSupportPrograms";
import { ProviderNumbers } from "./ProviderNumbers";
import { ProviderValues } from "./ProviderValues";

export interface PartII {
    id: number;
   
    memberTypeValues:MemberTypeValues [];
    memberTypeNumbers:MemberTypeNumbers [];
    diagnosisValues:DiagnosisValues [];
    diagnosisNumbers:DiagnosisNumbers [];
   // providerValues:ProviderValues,
    providerNumbers:ProviderNumbers [];
    providerValues:ProviderValues[];
    networkValues:NetworkValues [];
    networkNumbers:NetworkNumbers [];
    nonUAEClaim:NonUAEClaims [];
    claimsPerServiceMonth:ClaimsPerServiceMonth [];
    patientSupportPrograms:PatientSupportPrograms [];
  }
