import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinfuncionComponent } from './sinfuncion.component';

describe('SinfuncionComponent', () => {
  let component: SinfuncionComponent;
  let fixture: ComponentFixture<SinfuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinfuncionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinfuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
