import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutNetworkComponent } from './in-out-network.component';

describe('InOutNetworkComponent', () => {
  let component: InOutNetworkComponent;
  let fixture: ComponentFixture<InOutNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutNetworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOutNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
