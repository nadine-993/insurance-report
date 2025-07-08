import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { authGuard } from './_gurads/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { ExcelReportcomponentComponent } from './excel-reportcomponent/excel-reportcomponent.component';
//import { ReportSummaryComponent } from './report-summary/report-summary.component';
//import { FullReportComponent } from './full-report/full-report.component';


export const routes: Routes = [
    {path:'', component:HomeComponent},
    { path: 'excel-report', component: ExcelReportcomponentComponent },


    {path:'',
        runGuardsAndResolvers:'always',
        canActivate: [authGuard],
        children:[
  

        ]
    },
    {path:'excel-report', component:ExcelReportcomponentComponent},
    {path:'errors', component:TestErrorsComponent},   
    {path:'not-found', component:NotFoundComponent},   
    {path:'server-error', component:ServerErrorComponent},   

    {path:'**', component:HomeComponent, pathMatch:'full'},   
];
