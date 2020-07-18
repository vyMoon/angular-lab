import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonBoardComponent } from './pockemon-board.component';

xdescribe('PockemonBoardComponent', () => {
  let component: PockemonBoardComponent;
  let fixture: ComponentFixture<PockemonBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PockemonBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
