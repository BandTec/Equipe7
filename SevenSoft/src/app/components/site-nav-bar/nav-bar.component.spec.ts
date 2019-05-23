import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: SiteNavBarComponent;
  let fixture: ComponentFixture<SiteNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
