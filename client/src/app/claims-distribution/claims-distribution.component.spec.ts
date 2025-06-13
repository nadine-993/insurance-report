import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsDistributionComponent } from './claims-distribution.component';

describe('ClaimsDistributionComponent', () => {
  let component: ClaimsDistributionComponent;
  let fixture: ComponentFixture<ClaimsDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsDistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
