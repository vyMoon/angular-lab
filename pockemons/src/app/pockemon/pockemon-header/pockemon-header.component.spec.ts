import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonHeaderComponent } from './pockemon-header.component';

describe('PockemonHeaderComponent', () => {
  let component: PockemonHeaderComponent;
  let fixture: ComponentFixture<PockemonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PockemonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
