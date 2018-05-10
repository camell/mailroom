import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonZeroForYourConsiderationComponent } from './season-zero-for-your-consideration.component';

describe('SeasonZeroForYourConsiderationComponent', () => {
  let component: SeasonZeroForYourConsiderationComponent;
  let fixture: ComponentFixture<SeasonZeroForYourConsiderationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonZeroForYourConsiderationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonZeroForYourConsiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
