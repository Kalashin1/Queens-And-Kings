import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingVideosComponent } from './teaching-videos.component';

describe('TeachingVideosComponent', () => {
  let component: TeachingVideosComponent;
  let fixture: ComponentFixture<TeachingVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
