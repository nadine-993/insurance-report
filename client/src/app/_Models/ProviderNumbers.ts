export interface ProviderNumbers{
    id: number;
    providerName: string;
    ip: number;
    op: number;
    pharmacy: string;
    dental: number;
    maternity: number | null;
    total: number;
}