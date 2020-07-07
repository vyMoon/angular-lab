import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PockemonHeaderComponent } from './pockemon-header.component';

@Component({
  selector: 'app-test',
  template: `
    <app-pockemon-header
      [title]="title"
      [style]=style
    ></app-pockemon-header>
  `,
})
class TestComponent {
  title = 'test title';
  style = 'twst style'
}

describe('PockemonHeaderComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PockemonHeaderComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    // expect(component.title).toEqual('test title')
    const title = element.query(By.css('.header_title')).nativeElement;
    expect(title.innerText).toEqual(component.title)
  });

  it('should have view switcher', () => {
    const swither = element.query(By.css('.header_controlscontainer'))
    expect(swither).toBeTruthy();
  });


});
