import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQiComponent } from './update-qi.component';

describe('UpdateQiComponent', () => {
  let component: UpdateQiComponent;
  let fixture: ComponentFixture<UpdateQiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateQiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
