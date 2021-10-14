import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsAreaComponent } from './buildings-area.component';

describe('BuildingsAreaComponent', () => {
  let component: BuildingsAreaComponent;
  let fixture: ComponentFixture<BuildingsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
