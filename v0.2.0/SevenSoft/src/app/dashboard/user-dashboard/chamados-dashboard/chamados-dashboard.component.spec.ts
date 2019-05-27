import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosDashboardComponent } from './chamados-dashboard.component';

describe('ChamadosDashboardComponent', () => {
  let component: ChamadosDashboardComponent;
  let fixture: ComponentFixture<ChamadosDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadosDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
