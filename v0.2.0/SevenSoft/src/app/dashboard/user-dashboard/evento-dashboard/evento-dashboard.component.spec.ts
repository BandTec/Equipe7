import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDashboardComponent } from './evento-dashboard.component';

describe('EventoDashboardComponent', () => {
  let component: EventoDashboardComponent;
  let fixture: ComponentFixture<EventoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
