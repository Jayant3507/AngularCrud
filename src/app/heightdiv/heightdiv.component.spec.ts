import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightdivComponent } from './heightdiv.component';

describe('HeightdivComponent', () => {
  let component: HeightdivComponent;
  let fixture: ComponentFixture<HeightdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
