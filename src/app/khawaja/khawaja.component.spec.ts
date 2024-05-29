import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhawajaComponent } from './khawaja.component';

describe('KhawajaComponent', () => {
  let component: KhawajaComponent;
  let fixture: ComponentFixture<KhawajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhawajaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhawajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
