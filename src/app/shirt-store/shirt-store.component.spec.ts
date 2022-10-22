import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtStoreComponent } from './shirt-store.component';

describe('ShirtStoreComponent', () => {
  let component: ShirtStoreComponent;
  let fixture: ComponentFixture<ShirtStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirtStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShirtStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
