import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaServiciosComponent } from './prueba-servicios.component';

describe('PruebaServiciosComponent', () => {
  let component: PruebaServiciosComponent;
  let fixture: ComponentFixture<PruebaServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
