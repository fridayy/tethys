import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPaginationComponent } from './todo-pagination.component';
import {PageMetadata} from "../../models/pageMetadata";

describe('TodoPaginationComponent', () => {
  let component: TodoPaginationComponent;
  let fixture: ComponentFixture<TodoPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPaginationComponent);
    component = fixture.componentInstance;
    component.pageMetadata = new MockedPageMetaData(2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockedPageMetaData implements PageMetadata {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;


  constructor(number: number) {
    this.number = number;
  }
}
