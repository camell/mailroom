import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenplaySwiperComponent } from './screenplay-swiper.component';

describe('ScreenplaySwiperComponent', () => {
  let component: ScreenplaySwiperComponent;
  let fixture: ComponentFixture<ScreenplaySwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenplaySwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenplaySwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
