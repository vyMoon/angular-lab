import {
  Component, Input, OnInit, OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewService } from '../../../pockemon/services/view/view.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title: string;

  style$: Subscription;
  style2 = '';

  constructor(
    private viewService: ViewService,
  ) {  }

  ngOnInit(): void {
    this.style$ = this.viewService.getStyleObservable().subscribe( style => this.style2 = style);
    this.viewService.sendStyle();
  }

  ngOnDestroy(): void {
    this.style$.unsubscribe();
  }

  getStyle(): string {
    return this.style2;
  }

  onChangeStyle(): void {
    this.viewService.changeStyle();
  }
}
