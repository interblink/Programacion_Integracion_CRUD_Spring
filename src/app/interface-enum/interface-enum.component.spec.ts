import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEnumComponent } from './interface-enum.component';

describe('InterfaceEnumComponent', () => {
  let component: InterfaceEnumComponent;
  let fixture: ComponentFixture<InterfaceEnumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceEnumComponent]
    });
    fixture = TestBed.createComponent(InterfaceEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
