import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

import { Pockemon, PockemonAction } from '../../Interfases';

@Component({
  selector: 'app-pockemon-item',
  templateUrl: './pockemon-item.component.html',
  styleUrls: ['./pockemon-item.component.scss']
})
export class PockemonItemComponent implements OnInit {

  @Input() pockemon: Pockemon;
  @Input() style: string;

  @Output() action: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.pockemon)
  }

  onClickButton(): void {
    this.action.emit(this.pockemon.id);
  }

  isPowerfull(): boolean {
    return this.pockemon.damage > 50;
  }

}
