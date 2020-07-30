import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonEditorComponent } from './pockemon-editor.component';

xdescribe('PockemonEditorComponent', () => {
  let component: PockemonEditorComponent;
  let fixture: ComponentFixture<PockemonEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PockemonEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PockemonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
