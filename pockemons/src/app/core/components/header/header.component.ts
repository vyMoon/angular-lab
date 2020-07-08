import {
  Component, Input,
} from '@angular/core';
import { ViewService } from '../../../pockemon/services/view/view.service';
import { LanguageService } from '../../../pockemon/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string;

  constructor(
    private viewService: ViewService,
    private languageService: LanguageService,
  ) { }

  getStyle() {
    return this.viewService.style;
  }

  get language() {
    return this.languageService.language;
  }

  onChangeStyle(): void {
    this.viewService.changeStyle();
  }

  onChangeLanguage(): void {
    this.languageService.changeLanguage();
  }
}
