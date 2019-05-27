import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDashboardComponent } from './side-bar-dashboard.component';

describe('SideBarDashboardComponent', () => {
  let component: SideBarDashboardComponent;
  let fixture: ComponentFixture<SideBarDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
