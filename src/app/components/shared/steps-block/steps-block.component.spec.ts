import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsBlockComponent } from './steps-block.component';

describe('StepsBlockComponent', () => {
  let component: StepsBlockComponent;
  let fixture: ComponentFixture<StepsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
