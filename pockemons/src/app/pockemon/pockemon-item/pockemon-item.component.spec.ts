import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PockemonItemComponent } from './pockemon-item.component';
import { ViewService } from '../services/view/view.service';
import { Pockemon } from '../../Interfases';

const pockemon1: Pockemon =  {
  id: 2,
  name: 'Test name',
  damage: 51,
  created: '2020-1-1',
  isFree: true
}

const pockemon2: Pockemon =  {
  id: 2,
  name: 'Test name',
  damage: 49,
  created: '2020-1-1',
  isFree: false
}


describe('PockemonItemComponent', () => {

  let component: PockemonItemComponent;
  let service: ViewService;
  let fixture;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PockemonItemComponent,
      ],
    });
    fixture = TestBed.createComponent(PockemonItemComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ViewService);
    element = fixture.nativeElement;

    component.pockemon = pockemon1;
    fixture.detectChanges();
  }));

  it('should create pockemon component instance', () => {
    expect(component).toBeTruthy()
  });

  it('should have style2 property to equal cards', () => {
    expect(component.style2).toEqual('cards');
  });

  it('should have style2 property to equal lines after Vewservise changeStyle runing', () => {
    service.changeStyle();
    fixture.detectChanges();
    expect(component.style2).toEqual('lines');
  });

  it('should rise the action event on click button', () => {
    component.action.subscribe((selectedId: number) => {
      expect(selectedId).toEqual(component.pockemon.id)
    })
  });

  it('should have isPowerfull returns true if component.pockemon.damage more than 50', () => {
    expect(component.isPowerfull()).toEqual(true)
  });

  it('should have isPowerfull returns false if component.pockemon.damage les than 51', () => {
    component.pockemon = pockemon2;
    fixture.detectChanges()

    expect(component.isPowerfull()).toEqual(false);
  });

  it('should have title to equal pockemon name property', () => {
    const header = element.querySelector('.pockemon_name').textContent;
    expect(header).toContain(component.pockemon.name);
  });

  it('should display pockemon\'s damage property', () => {
    const header = element.querySelector('.pockemon_damage').textContent;
    expect(header).toContain(component.pockemon.damage);
  });

  it('should have catch - release button', () => {
    const button = element.querySelector('.pockemon_button');
    expect(button).toBeTruthy(); 
  });

  it('should have text catch on the catch-release button if the isFree the Pockemon\'s property is true', () => {
    const buttonText = element.querySelector('.pockemon_button').textContent;
    expect(buttonText).toContain('catch')
  });

  it('should have text catch on the catch-release button if the isFree the Pockemon\'s property is true', () => {
    const buttonText = element.querySelector('.pockemon_button').textContent;
    expect(buttonText).toContain('catch')
  });

  it('should have text release on the catch-release button if the isFree the Pockemon\'s property is false', () => {
    component.pockemon = pockemon2;
    fixture.detectChanges();
    const buttonText = element.querySelector('.pockemon_button').textContent;
    expect(buttonText).toContain('release')
  });

  it('should display pockemon image', () => {
    const image = element.querySelector('.pockemon_image');
    expect(image).toBeTruthy();
  });

  it('should display image that contain pockemon\'s image', () => {
    const imageSrc = element.querySelector('.pockemon_image').src;
    expect(imageSrc).toContain(component.pockemon.id);
  });



});
