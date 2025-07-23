import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterOutlet } from '@angular/router';
import { AccountService } from '../../_services/account.service';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
     accountService= inject (AccountService);
  

  ngOnInit(): void {
      console.log ('user is ', this.accountService.currentUser());
  }

}


