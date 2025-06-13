import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsMonthlyComponent } from './claims-monthly.component';

describe('ClaimsMonthlyComponent', () => {
  let component: ClaimsMonthlyComponent;
  let fixture: ComponentFixture<ClaimsMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
