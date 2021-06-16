import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtsLoginComponent } from './vts-login.component';

describe('VtsLoginComponent', () => {
  let component: VtsLoginComponent;
  let fixture: ComponentFixture<VtsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
