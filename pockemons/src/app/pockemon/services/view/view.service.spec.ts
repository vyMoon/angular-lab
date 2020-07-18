import { TestBed } from '@angular/core/testing';

import { ViewService } from './view.service';

describe('ViewService', () => {
  let service: ViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ViewService]});
    service = TestBed.inject(ViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getStyle() should return cards value after creating', () => {
    expect(service.getStyle()).toBe('cards');
  });

  it('#changeStyle sthould change style value', () => {
    service.changeStyle();
    expect(service.getStyle()).toBe('lines')
  });

  // it('#getStyleAsObservable() should return value form observable', (done: DoneFn) => {
  //   service.getStyleObservable().subscribe( value => {
  //     expect(value).toBe('cards');
  //     done();
  //   })
  // })
});
