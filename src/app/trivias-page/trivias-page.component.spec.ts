import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviasPageComponent } from './trivias-page.component';

describe('TriviasPageComponent', () => {
  let component: TriviasPageComponent;
  let fixture: ComponentFixture<TriviasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
