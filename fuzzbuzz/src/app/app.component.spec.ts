import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    // tslint:disable-next-line:prefer-for-of
     });
  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('checking Buzz Fizz FizzBuzz', () => {
    const sst: any[] = component.getListValues();
    // tslint:disable-next-line:prefer-for-of
    for (let x = 0; x < sst.length; x++) {
      expect(sst[2]).toEqual('Fizz');
      expect(sst[4]).toEqual('Buzz');
      expect(sst[13]).toEqual(14);
      expect(sst[99]).toEqual('Buzz');
      expect(sst[14]).toEqual('Fizz');
      expect(sst[0]).not.toEqual(0);
    }
  });
});
