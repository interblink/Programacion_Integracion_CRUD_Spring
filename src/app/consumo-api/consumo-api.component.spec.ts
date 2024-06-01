import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoApiComponent } from './consumo-api.component';

describe('ConsumoApiComponent', () => {
  let component: ConsumoApiComponent;
  let fixture: ComponentFixture<ConsumoApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumoApiComponent]
    });
    fixture = TestBed.createComponent(ConsumoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
