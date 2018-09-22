import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCollectionComponent } from './index-collection.component';

describe('IndexCollectionComponent', () => {
  let component: IndexCollectionComponent;
  let fixture: ComponentFixture<IndexCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
