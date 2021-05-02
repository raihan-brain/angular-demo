import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachBComponent } from './coach-b.component';

describe('CoachBComponent', () => {
  let component: CoachBComponent;
  let fixture: ComponentFixture<CoachBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
