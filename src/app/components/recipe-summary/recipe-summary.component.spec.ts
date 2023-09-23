import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSummaryComponent } from './recipe-summary.component';

describe('RecipeSummaryComponent', () => {
  let component: RecipeSummaryComponent;
  let fixture: ComponentFixture<RecipeSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeSummaryComponent]
    });
    fixture = TestBed.createComponent(RecipeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
