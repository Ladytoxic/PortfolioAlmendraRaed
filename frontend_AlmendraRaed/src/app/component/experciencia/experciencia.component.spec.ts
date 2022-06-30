import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpercienciaComponent } from './experciencia.component';

describe('ExpercienciaComponent', () => {
  let component: ExpercienciaComponent;
  let fixture: ComponentFixture<ExpercienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpercienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpercienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
