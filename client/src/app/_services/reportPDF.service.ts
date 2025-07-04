import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, model, signal } from '@angular/core';
import { User } from '../_Models/user';
import { map, Observable } from 'rxjs';
import { FullReport } from '../_Models/FullReport';


@Injectable({
  providedIn: 'root'
})
export class ReportService{
    private http=inject (HttpClient);
  baseUrl = '/api/';
  currentUser= signal<User | any>(null);

  uploadPdf(file:File): Observable <FullReport>{
    const formData=new FormData();
    formData.append('pdfFile', file);
    console.log('📤 Uploading PDF to backend...', file);// ✅ Log the file
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = user?.token;
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    return this.http.post<FullReport>(this.baseUrl+'account/Test',formData,  { headers },

    );

  }

}