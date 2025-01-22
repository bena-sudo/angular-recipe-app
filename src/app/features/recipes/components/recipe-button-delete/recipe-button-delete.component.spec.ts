import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeButtonDeleteComponent } from './recipe-button-delete.component';

describe('RecipeButtonDeleteComponent', () => {
  let component: RecipeButtonDeleteComponent;
  let fixture: ComponentFixture<RecipeButtonDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeButtonDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeButtonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
