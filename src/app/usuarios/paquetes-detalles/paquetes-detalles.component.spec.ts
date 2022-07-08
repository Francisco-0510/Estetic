import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesDetallesComponent } from './paquetes-detalles.component';

describe('PaquetesDetallesComponent', () => {
  let component: PaquetesDetallesComponent;
  let fixture: ComponentFixture<PaquetesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaquetesDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquetesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
