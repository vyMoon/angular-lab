import {
  Component, Input, OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewService } from '../../../pockemon/services/view/view.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  style$: Subscription;
  style2: string = '';

  constructor(
    private viewService: ViewService,
  ) {  }

  ngOnInit(): void {
    this.style$ = this.viewService.getStyleObservable().subscribe( style => this.style2 = style);
    this.viewService.sendStyle()
  }

  ngOnDestroy() {
    this.style$.unsubscribe();
  }

  getStyle() {
    return this.style2;
  }

  onChangeStyle(): void {
    this.viewService.changeStyle();
  }
}
