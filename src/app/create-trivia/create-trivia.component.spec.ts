import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTriviaComponent } from './create-trivia.component';

describe('CreateTriviaComponent', () => {
  let component: CreateTriviaComponent;
  let fixture: ComponentFixture<CreateTriviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTriviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
