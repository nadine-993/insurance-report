import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FullReport } from '../_Models/FullReport';

@Injectable({ providedIn: 'root' })
export class ReportService {
  private http = inject(HttpClient);
  baseUrl = 'https://alhimayahapi.scuritytech.com/';

  //Shared observable state
  private reportDataSubject = new BehaviorSubject<FullReport | null>(null);
  reportData$ = this.reportDataSubject.asObservable();


  uploadPdf(
    file: File,
    totalNumberOfEmployees:number,
    totalNumberOfSpouse:number,
    totalNumberOfDependents:number,
    creationDate:string
   
  ): Observable<FullReport> {
    const formData = new FormData();
  
    // ✅ Match backend model (case-sensitive)
    formData.append('PdfFile', file);
    console.log('📤 Uploading PDF to backend...', file);

    const params=new HttpParams()
    .set('totalNumberOfEmployees', totalNumberOfEmployees.toString())
    .set('totalNumberOfSpouse', totalNumberOfSpouse.toString())
    .set('totalNumberOfDependents', totalNumberOfDependents.toString())
    .set('creatingDate', creationDate)
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
    .post<FullReport>(`${this.baseUrl}api/report/uploadpdf`, formData, { headers, params })
    .pipe(
      tap((response) => this.reportDataSubject.next(response))
       // store result
    );
}
  // Optionally expose a method to set or clear report manually
  clearReportData() {
    this.reportDataSubject.next(null);
  }

  getReportData(): FullReport | null {
    return this.reportDataSubject.value;
  }
}
