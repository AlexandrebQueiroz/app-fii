import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CteDataComponent } from './cte-data.component';

describe('CteDataComponent', () => {
  let component: CteDataComponent;
  let fixture: ComponentFixture<CteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CteDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
