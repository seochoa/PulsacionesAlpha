import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaconsultaComponent } from './personaconsulta.component';

describe('PersonaconsultaComponent', () => {
  let component: PersonaconsultaComponent;
  let fixture: ComponentFixture<PersonaconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaconsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
