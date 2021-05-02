import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAComponent } from './coach-a.component';

describe('CoachAComponent', () => {
  let component: CoachAComponent;
  let fixture: ComponentFixture<CoachAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
