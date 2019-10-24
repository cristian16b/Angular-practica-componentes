import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentebComponent } from './componenteb.component';

describe('ComponentebComponent', () => {
  let component: ComponentebComponent;
  let fixture: ComponentFixture<ComponentebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
