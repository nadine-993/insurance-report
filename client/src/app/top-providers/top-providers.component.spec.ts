import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProvidersComponent } from './top-providers.component';

describe('TopProvidersComponent', () => {
  let component: TopProvidersComponent;
  let fixture: ComponentFixture<TopProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopProvidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
