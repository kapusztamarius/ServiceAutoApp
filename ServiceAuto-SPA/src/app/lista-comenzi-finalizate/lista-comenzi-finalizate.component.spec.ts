/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaComenziFinalizateComponent } from './lista-comenzi-finalizate.component';

describe('ListaComenziFinalizateComponent', () => {
  let component: ListaComenziFinalizateComponent;
  let fixture: ComponentFixture<ListaComenziFinalizateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComenziFinalizateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComenziFinalizateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
