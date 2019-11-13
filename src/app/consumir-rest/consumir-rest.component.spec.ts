import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirRestComponent } from './consumir-rest.component';

describe('ConsumirRestComponent', () => {
  let component: ConsumirRestComponent;
  let fixture: ComponentFixture<ConsumirRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumirRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumirRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
