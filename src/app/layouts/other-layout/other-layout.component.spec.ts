import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLayoutComponent } from './other-layout.component';

describe('OtherLayoutComponent', () => {
  let component: OtherLayoutComponent;
  let fixture: ComponentFixture<OtherLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
