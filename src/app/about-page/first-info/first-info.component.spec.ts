import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInfoComponent } from './first-info.component';

describe('FirstInfoComponent', () => {
  let component: FirstInfoComponent;
  let fixture: ComponentFixture<FirstInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
