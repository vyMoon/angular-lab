import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: string = 'jp';

  changeLanguage(): void {
    this.language = this.language === 'eng' ? 'jp' : 'eng';
  }
}
