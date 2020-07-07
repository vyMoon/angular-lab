// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { PockemonItemComponent } from './pockemon-item.component';
// import { Component, DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// import { Pockemon } from '../../../app/Interfases';

// @Component({
//   selector: 'app-test-component',
//   template: `
//     <app-pockemon-item
//       [pockemon]="pockemon"
//       [style]="style"
//     ></app-pockemon-item>  
//   `,
// })
// class TestCoponent {
//   public pockemon: Pockemon = {
//     id: 2,
//     name: 'test name',
//     damage: 35,
//     isFree: true
//   };
//   public style: string = 'cards';
// }

// describe('PockemonItemComponent', () => {
//   let component: PockemonItemComponent;
//   let fixture: ComponentFixture<PockemonItemComponent>;
//   let element: DebugElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PockemonItemComponent, TestCoponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PockemonItemComponent);
//     component = fixture.componentInstance;
//     element = fixture.debugElement;
//     fixture.detectChanges();
//   });

//   it('should have style property', () => {
//     expect(component.style).toEqual('cards')
//   })

  // it('should have name', () => {
  //   const name = element.query(By.css('.pockemon_name'));
  //   expect(name.nativeElement.innerText).toEqual(component.pockemon.name)
  // });

  // it('should create', () => {
  //   // component.pockemon = pockemon;
  //   // component.detectChanges()
  //   expect(component).toBeTruthy();
  // });

  // it('should have title', () => {
  //   const title = fixture.nativeElement.querySelector('.pockemon_name')
  //   expect(title).toBeTruthy();
  // })
// });
