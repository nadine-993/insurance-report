import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FullReport } from '../_Models/FullReport';

@Injectable({ providedIn: 'root' })
export class ReportService {
  private http = inject(HttpClient);
  baseUrl = '/api/';

  // 🔁 Shared observable state
  private reportDataSubject = new BehaviorSubject<FullReport | null>(null);
  reportData$ = this.reportDataSubject.asObservable();

  uploadPdf(file: File): Observable<FullReport> {
    const formData = new FormData();
    formData.append('pdfFile', file);
    console.log('📤 Uploading PDF to backend...', file);

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = user?.token;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<FullReport>(this.baseUrl + 'account/Test', formData, { headers }).pipe(
      tap((response: FullReport) => {
        // Store result in shared state
        this.reportDataSubject.next(response);
      })
    );
  }

  // Optionally expose a method to set or clear report manually
  clearReportData() {
    this.reportDataSubject.next(null);
  }
}
