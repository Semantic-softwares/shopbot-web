import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStoreComponent } from './category-store.component';

describe('CategoryStoreComponent', () => {
  let component: CategoryStoreComponent;
  let fixture: ComponentFixture<CategoryStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryStoreComponent]
    });
    fixture = TestBed.createComponent(CategoryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
