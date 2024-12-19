import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesCardComponent } from './recipes-card.component';

describe('RecipesCardComponent', () => {
  let component: RecipesCardComponent;
  let fixture: ComponentFixture<RecipesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
