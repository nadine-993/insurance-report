import { Routes } from '@angular/router';

import { authGuard } from './_gurads/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { ExcelReportcomponentComponent } from './layouts/excel-reportcomponent/excel-reportcomponent.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './layouts/login/login.component';
import { HomeComponent } from './layouts/home/home.component';
import { FullReportComponent } from './layouts/full-report/full-report.component';
//import { ReportSummaryComponent } from './report-summary/report-summary.component';
//import { FullReportComponent } from './full-report/full-report.component';


export const routes: Routes = [
  // Login route (no layout)
  { path: '', component: LoginComponent },

    // Protected routes using main layout
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'excel-report', component: ExcelReportcomponentComponent },
          {path: 'full-report', component:FullReportComponent},
        ]
      },
               // error routes
    { path: 'errors', component: TestErrorsComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'server-error', component: ServerErrorComponent },
    { path: '**', redirectTo: ''}
 ]
        
      
 
 
      
  
 