import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListMetadataComponent} from './todo-list-metadata.component';
import {PageMetadata} from "../../models/pageMetadata";

describe('TodoListMetadataComponent', () => {
  let component: TodoListMetadataComponent;
  let fixture: ComponentFixture<TodoListMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListMetadataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListMetadataComponent);
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
