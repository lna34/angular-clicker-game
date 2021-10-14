import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerAreaComponent } from './clicker-area.component';

describe('ClickerAreaComponent', () => {
  let component: ClickerAreaComponent;
  let fixture: ComponentFixture<ClickerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickerAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
