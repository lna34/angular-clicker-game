import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAreaComponent } from './stat-area.component';

describe('StatAreaComponent', () => {
  let component: StatAreaComponent;
  let fixture: ComponentFixture<StatAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
