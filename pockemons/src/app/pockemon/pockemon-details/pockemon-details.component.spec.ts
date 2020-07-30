import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonDetailsComponent } from './pockemon-details.component';
import { PockemonService } from '../services/pockemon/pockemon.service';

xdescribe('PockemonDetailsComponent', () => {
  let component: PockemonDetailsComponent;
  let fixture: ComponentFixture<PockemonDetailsComponent>;
  let service: PockemonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PockemonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonDetailsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PockemonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
