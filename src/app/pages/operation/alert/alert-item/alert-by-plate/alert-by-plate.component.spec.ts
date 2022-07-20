import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertByPlateComponent } from './alert-by-plate.component';

describe('AlertByPlateComponent', () => {
  let component: AlertByPlateComponent;
  let fixture: ComponentFixture<AlertByPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertByPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertByPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
