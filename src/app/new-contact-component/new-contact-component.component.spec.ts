import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactComponentComponent } from './new-contact-component.component';

describe('NewContactComponentComponent', () => {
  let component: NewContactComponentComponent;
  let fixture: ComponentFixture<NewContactComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
