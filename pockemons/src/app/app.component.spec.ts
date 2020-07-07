import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Pockemons'`, () => {
    expect(component.title).toEqual('Pockemons');
  });

  it('should have styel property', () => {
    expect(component.style).toEqual('cards');
  })

  it('should change style property', () => {
    component.onStyleChange();
    expect(component.style).toEqual('lines');
    component.onStyleChange();
    expect(component.style).toEqual('cards');
  })

});
