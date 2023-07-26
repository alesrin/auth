import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLugarComponent } from './lista-lugar.component';

describe('ListaLugarComponent', () => {
  let component: ListaLugarComponent;
  let fixture: ComponentFixture<ListaLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLugarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
