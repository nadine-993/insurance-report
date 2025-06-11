export interface ReportSummary{
    id: number;
    schemeName: string;
    policyNumber: number;
    
    policyEffectiveDate: Date;
    policyExpiredDate:Date;
    initialPolicyEffectiveDate: Date;

    valueOfClaimsProcessed: number;
    claimsReportedNotProcessed: number;
    claimsNotReported: number;
}