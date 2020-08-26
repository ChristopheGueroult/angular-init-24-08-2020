import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBandeauxComponent } from './text-bandeaux.component';

describe('TextBandeauxComponent', () => {
  let component: TextBandeauxComponent;
  let fixture: ComponentFixture<TextBandeauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBandeauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBandeauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
