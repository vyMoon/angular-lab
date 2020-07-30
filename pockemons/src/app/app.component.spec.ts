import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // }));

  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent();
  })

  it ('should be truthy', () => {
    expect(app).toBeTruthy();
  })

  it('should have title property to equal Pockemons', () => {
    expect(app.title).toEqual('Pockemons', 'after renderring');
  })

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have title 'Pockemons'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toContain('Pockemons');
  // });
});
