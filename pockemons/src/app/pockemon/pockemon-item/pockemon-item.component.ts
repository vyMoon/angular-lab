import {
  Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

import { Subscription } from 'rxjs'

import { Pockemon } from '../../Interfases';
import { ViewService } from '../services/view/view.service';

@Component({
  selector: 'app-pockemon-item',
  templateUrl: './pockemon-item.component.html',
  styleUrls: ['./pockemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PockemonItemComponent {
  @Input() pockemon: Pockemon;
  @Output() action: EventEmitter<number> = new EventEmitter<number>();

  style$: Subscription;
  style2: string = '';

  constructor(
    private cd: ChangeDetectorRef,
    private viewService: ViewService,
  ) {  }

  ngOnInit(): void {
    this.style$ = this.viewService.getStyleObservable().subscribe( style => this.style2 = style);
    this.viewService.sendStyle();
  }

  ngOnDestroy(): void {
    this.style$.unsubscribe();
  }

  ngDoCheck(): void {
    this.cd.detectChanges();
  }

  onClickButton(): void {
    this.action.emit(this.pockemon.id);
  }

  isPowerfull(): boolean {
    return this.pockemon.damage > 50;
  }

}
