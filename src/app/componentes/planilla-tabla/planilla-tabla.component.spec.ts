import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanillaTablaComponent } from './planilla-tabla.component';

describe('PlanillaTablaComponent', () => {
  let component: PlanillaTablaComponent;
  let fixture: ComponentFixture<PlanillaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanillaTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanillaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
