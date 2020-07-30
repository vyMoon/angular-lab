import {
  Component, OnInit, OnDestroy, DoCheck, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Pockemon } from '../../Interfases';
import { ViewService } from '../services/view/view.service';

@Component({
  selector: 'app-pockemon-item',
  templateUrl: './pockemon-item.component.html',
  styleUrls: ['./pockemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PockemonItemComponent implements OnInit, DoCheck, OnDestroy {
  @Input() pockemon: Pockemon;
  @Output() action: EventEmitter<number> = new EventEmitter<number>();

  style$: Subscription;
  style2 = '';

  constructor(
    private viewService: ViewService,
    private changeDetection: ChangeDetectorRef,
  ) {  }

  ngOnInit(): void {
    this.style$ = this.viewService.getStyleObservable().subscribe( style => this.style2 = style);
    this.viewService.sendStyle();
  }

  ngDoCheck() {
    this.changeDetection.markForCheck();
  }

  ngOnDestroy(): void {
    this.style$.unsubscribe();
  }

  onClickButton(): void {
    this.action.emit(this.pockemon.id);
  }

  isPowerfull(): boolean {
    return this.pockemon.damage > 50;
  }

}
