import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponenComponent } from './login-componen.component';

describe('LoginComponenComponent', () => {
  let component: LoginComponenComponent;
  let fixture: ComponentFixture<LoginComponenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
