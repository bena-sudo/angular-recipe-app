import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesTableRowsComponent } from './recipes-table-rows.component';

describe('RecipesTableRowsComponent', () => {
  let component: RecipesTableRowsComponent;
  let fixture: ComponentFixture<RecipesTableRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesTableRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesTableRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
