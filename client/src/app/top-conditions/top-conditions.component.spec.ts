import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopConditionsComponent } from './top-conditions.component';

describe('TopConditionsComponent', () => {
  let component: TopConditionsComponent;
  let fixture: ComponentFixture<TopConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
