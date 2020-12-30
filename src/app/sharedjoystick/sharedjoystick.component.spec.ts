import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedjoystickComponent } from './sharedjoystick.component';

describe('SharedjoystickComponent', () => {
  let component: SharedjoystickComponent;
  let fixture: ComponentFixture<SharedjoystickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedjoystickComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedjoystickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
