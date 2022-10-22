import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSemComponent } from './nav-sem.component';

describe('NavSemComponent', () => {
  let component: NavSemComponent;
  let fixture: ComponentFixture<NavSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
