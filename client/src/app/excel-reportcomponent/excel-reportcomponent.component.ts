import { Component, inject, OnInit } from '@angular/core';
import { PopulationService } from '../_services/population.service';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { AccountService } from '../_services/account.service';
import { ReportService } from '../_services/reportPDF.service';
import { FullReport } from '../_Models/FullReport';
import { ClaimsComponent } from '../table-views/claims/claims.component';
import { ClaimspermonthComponent } from '../table-views/claimspermonth/claimspermonth.component';
import { InoutnetworkComponent } from '../table-views/inoutnetwork/inoutnetwork.component';
import { PopulationComponent } from '../table-views/population/population.component';
import { ClaimsdistributionComponent } from "../table-views/claimsdistribution/claimsdistribution.component";
import { Top10conditionsComponent } from "../table-views/top10conditions/top10conditions.component";
import { Top10ProvidersComponent } from '../table-views/top10providers/top10providers.component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PptxGenJS from 'pptxgenjs';



@Component({
  selector: 'app-excel-reportcomponent',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, CommonModule, ClaimspermonthComponent, InoutnetworkComponent, PopulationComponent, ClaimsdistributionComponent, Top10conditionsComponent, Top10ProvidersComponent],
  templateUrl: './excel-reportcomponent.component.html',
  styleUrls: ['./excel-reportcomponent.component.css']
})
export class ExcelReportcomponentComponent implements OnInit {

  public populationService= inject(PopulationService);
    private accountService = inject(AccountService);
    reportService=inject(ReportService);
      reportData: FullReport | null = null;

      

      


  ngOnInit(): void {
    this.accountService.getCurrentUser().subscribe({
      next: user => console.log('✅ Current user:', user),
      error: err => console.error('❌ Error fetching current user', err)
    });

    this.reportService.reportData$.subscribe((data) => {
      if (data) {
        this.reportData = data;
        this.populationService.processPopulationDataBeg(data.populationCensusBeg);
        this.populationService.processPopulationDataEnd(data.populationCensusEnd);
      }
    });

  


  }
  async downloadPDF() {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth= pdf.internal.pageSize.getWidth();
    const pageHeight=pdf.internal.pageSize.getHeight();
  
    // Example: IDs for each section
    const sections = [
      'leading',
      'policy overview',
      'Population break down with Growth trend',
      'Claims per membership type',
      'Claim distribution based on services/benefits',
      'Month on Month Claims Distribution',
     'Claims - Top preferred providers (IP + OP)',
      'Claims - Top 10 Diagnosis (IP + OP )',
      'Claims Analysis- Inside & Outside Network',
      'Policy Performance Report'
    ];
  
    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (!element) {
        console.warn(`Section ${sections[i]} not found`);
        continue;
      }
  
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
  
      const imgWidth = pageWidth * 0.8; // 80% width
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
  
      const x = (pageWidth - imgWidth) / 2;  // center horizontally
      const y = (pageHeight - imgHeight) / 2;
  
      if (i !== 0) {
        pdf.addPage();
      }
  
      const margin = 10;
      const usableWidth = pdf.internal.pageSize.getWidth() - margin * 2;
      const usableHeight = (imgProps.height * usableWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', margin, margin, usableWidth, usableHeight);
      
    }
  
    pdf.save('report.pdf');
  }
  getQuarterFromDate(dateStr: string): string {
  if (!dateStr) return '';

  const date = new Date(dateStr);
  const month = date.getMonth(); // 0-based: Jan = 0, Dec = 11

  if (month >= 0 && month <= 2) return '1st Quarter';
  if (month >= 3 && month <= 5) return '2nd Quarter';
  if (month >= 6 && month <= 8) return '3rd Quarter';
  if (month >= 9 && month <= 11) return '4th Quarter';

  return '';
}


async downloadPowerPoint() {
  const pptx = new PptxGenJS();

  const sectionIds = [
    { id: 'leading' },// you can add a title here { id: 'leading', title:'title example' },
    { id: 'policy overview'},
    { id: 'Population break down with Growth trend'},
    { id: 'Claims per membership type' },
    { id: 'Claim distribution based on services/benefits'},
    { id: 'Month on Month Claims Distribution'},
    { id: 'Claims - Top preferred providers (IP + OP)'},
    { id: 'Claims - Top 10 Diagnosis (IP + OP )' },
    { id: 'Claims Analysis- Inside & Outside Network' },
    { id: 'Policy Performance Report' }
  ];

  for (const section of sectionIds) {
    const el = document.getElementById(section.id);
    if (!el) continue;

    // Render HTML section as image
    const canvas = await html2canvas(el, { scale: 2 });
    const dataUrl = canvas.toDataURL('image/png');

    const slide = pptx.addSlide();
    slide.addImage({
      data: dataUrl,
      x: 0.3,
      y: 0.3,
      w: 9,
      h: 5.2
    });

    // Optional: Add slide title
    // slide.addText(section.title, {
    //   x: 0.3,
    //   y: 0,
    //   fontSize: 18,
    //   bold: true
    // });
  }

  await pptx.writeFile({ fileName: 'Report.pptx' });
}


  
}

