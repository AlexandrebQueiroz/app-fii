import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertByDfeComponent } from './alert-by-dfe.component';

describe('AlertByDfeComponent', () => {
  let component: AlertByDfeComponent;
  let fixture: ComponentFixture<AlertByDfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertByDfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertByDfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
