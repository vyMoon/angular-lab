import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonItemComponent } from './pockemon-item.component';

describe('PockemonItemComponent', () => {
  let component: PockemonItemComponent;
  let fixture: ComponentFixture<PockemonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PockemonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
