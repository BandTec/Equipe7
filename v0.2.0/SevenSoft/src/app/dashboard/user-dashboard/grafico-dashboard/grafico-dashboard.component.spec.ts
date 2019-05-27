import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDashboardComponent } from './grafico-dashboard.component';

describe('GraficoDashboardComponent', () => {
  let component: GraficoDashboardComponent;
  let fixture: ComponentFixture<GraficoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
