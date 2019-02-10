import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContactComponentComponentComponent } from './detail-contact-component-component.component';

describe('DetailContactComponentComponentComponent', () => {
  let component: DetailContactComponentComponentComponent;
  let fixture: ComponentFixture<DetailContactComponentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContactComponentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContactComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
