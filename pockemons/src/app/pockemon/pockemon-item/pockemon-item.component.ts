import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

import { Pockemon } from '../../Interfases';

@Component({
  selector: 'app-pockemon-item',
  templateUrl: './pockemon-item.component.html',
  styleUrls: ['./pockemon-item.component.scss'],

  animations: [
    trigger('pockemonChecker', [


      state('free', style({
        backgroundColor: 'green'
      })),
      state('caught', style({
        backgroundColor: 'red',
      })),
      transition('caught => free', [
        animate(500)
      ]),
      transition('free => caught', [
        animate('1s 1s ease-in-out')
      ]),
      

    ]),

    // trigger('conditions', [
    //   state('first', style({
    //     opacity: 1,
    //   })),
    //   state('second', style({
    //     opacity: 0.5
    //   })),
    //   transition('* => *', [
    //     animate('1s', keyframes([
    //       style({ opacity: 0.1, offset: 0.1 }),
    //       style({ opacity: 0.6, offset: 0.2 }),
    //       style({ opacity: 1,   offset: 0.5 }),
    //       style({ opacity: 0.2, offset: 0.7 })
    //     ]))
    //   ])

    // ]),



    // trigger('flyInOut', [
    //   state('in', style({ transform: 'translateX(0)' })),
    //   transition('void => *', [
    //     style({ transform: 'translateX(-300%)' }),
    //     animate(1000)
    //   ]),
    //   transition('* => void', [
    //     animate(1000, style({ transform: 'translateX(300%)' }))
    //   ])
    // ])




    // trigger('myInsertRemoveTrigger', [
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     animate('1000ms ease-out', style({ opacity: 1 })),
    //   ]),
    //   transition(':leave', [
    //     animate('1000ms ease-out', style({ opacity: 0 }))
    //   ])
    // ]),


    


  ],
})
export class PockemonItemComponent implements OnInit {

  public item = true;

  @Input() pockemon: Pockemon;
  @Input() style: string;

  @Output() action: EventEmitter<number> = new EventEmitter<number>();
  data = 2;
  constructor() { }

  onAnimationEvent ( event ) {
    console.log(event)
    console.log(`Animation Trigger: ${event.triggerName}`);
    console.log(`Phase: ${event.phaseName}`);
    console.log(`Total time: ${event.totalTime}`);
    console.log(`From: ${event.fromState}`);
    console.log(`To: ${event.toState}`);
    console.log(`Element: ${event.element}`);
  }

  ngOnInit(): void {
    // console.log(this.pockemon)
  }

  onClickButton(): void {
    this.item = !this.item;
    this.action.emit(this.pockemon.id);
  }

  isPowerfull(): boolean {
    return this.pockemon.damage > 50;
  }

}
