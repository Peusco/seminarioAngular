import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShirtsListComponent } from './app-shirts-list.component';

describe('AppShirtsListComponent', () => {
  let component: AppShirtsListComponent;
  let fixture: ComponentFixture<AppShirtsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppShirtsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppShirtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
