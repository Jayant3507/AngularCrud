import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetRegComponent } from './pet-reg.component';

describe('PetRegComponent', () => {
  let component: PetRegComponent;
  let fixture: ComponentFixture<PetRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
