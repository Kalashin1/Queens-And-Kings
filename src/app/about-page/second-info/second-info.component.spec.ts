import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondInfoComponent } from './second-info.component';

describe('SecondInfoComponent', () => {
  let component: SecondInfoComponent;
  let fixture: ComponentFixture<SecondInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
