import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusAreaComponent } from './bonus-area.component';

describe('BonusAreaComponent', () => {
  let component: BonusAreaComponent;
  let fixture: ComponentFixture<BonusAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
