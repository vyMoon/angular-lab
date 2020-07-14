import {
  Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

import { Pockemon } from '../../Interfases';

@Component({
  selector: 'app-pockemon-item',
  templateUrl: './pockemon-item.component.html',
  styleUrls: ['./pockemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PockemonItemComponent implements OnChanges {

  @Input() pockemon: Pockemon;
  @Input() language: string;
  @Input() style: string;

  @Output() action: EventEmitter<number> = new EventEmitter<number>();

  constructor(public cd: ChangeDetectorRef) {}

  ngOnChanges(): void {
    this.cd.detectChanges();
  }

  onClickButton(): void {
    this.action.emit(this.pockemon.id);
  }

  isPowerfull(): boolean {
    return this.pockemon.damage > 50;
  }

}
