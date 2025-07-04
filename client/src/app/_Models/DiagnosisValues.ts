export interface DiagnosisValues{
    id: number;
    icdDescription: string;
    ip: number;
    op: number;
    pharmacy: string;
    dental: number;
    maternity: number | null;
    total: number;

}