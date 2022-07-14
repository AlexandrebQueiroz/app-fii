import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CteItemComponent } from './cte-item.component';

describe('CteItemComponent', () => {
  let component: CteItemComponent;
  let fixture: ComponentFixture<CteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
