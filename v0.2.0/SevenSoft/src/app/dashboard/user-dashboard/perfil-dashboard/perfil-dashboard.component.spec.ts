import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDashboardComponent } from './perfil-dashboard.component';

describe('PerfilDashboardComponent', () => {
  let component: PerfilDashboardComponent;
  let fixture: ComponentFixture<PerfilDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
