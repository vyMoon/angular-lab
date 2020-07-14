import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonDetailsComponent } from './pockemon-details.component';

describe('PockemonDetailsComponent', () => {
  let component: PockemonDetailsComponent;
  let fixture: ComponentFixture<PockemonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PockemonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
