/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComandaCurentaComponent } from './comanda-curenta.component';

describe('ComandaCurentaComponent', () => {
  let component: ComandaCurentaComponent;
  let fixture: ComponentFixture<ComandaCurentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandaCurentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaCurentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
