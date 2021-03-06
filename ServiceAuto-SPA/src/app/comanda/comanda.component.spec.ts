/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComandaComponent } from './comanda.component';

describe('ComandaComponent', () => {
  let component: ComandaComponent;
  let fixture: ComponentFixture<ComandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
