import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemByCategoryComponent } from './item-by-category.component';

describe('ItemByCategoryComponent', () => {
  let component: ItemByCategoryComponent;
  let fixture: ComponentFixture<ItemByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
