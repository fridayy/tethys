/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, EventEmitter} from '@angular/core';

import {TodoListComponent} from './todo-list.component';
import {MaterialModule} from "@angular/material";
import {TodoResource} from "../../models/todoResource";
import {TodoItem} from "../../models/todoItem";
import {LinkItem} from "../../models/linkItem";
import {AccessedItem} from "../../models/accessedItem";
import {PageMetadata} from "../../models/pageMetadata";

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let eventEmitter: EventEmitter<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule.forRoot()],
      declarations: [TodoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    component.todoResources = new MockedTodoResource("1");
    eventEmitter = new EventEmitter();
    component.delete = eventEmitter;
    fixture.detectChanges();
  });

  it('should be initialized correctly', () => {
    expect(component).toBeTruthy();
    expect(component.todoResources["mockId"]).toBe("1");
  });

  it('todo resource can be set', () => {
    expect(component.todoResources).not.toBeUndefined();
  });

  it('displays correct information', () => {
    let element = fixture.nativeElement;
    fixture.detectChanges();
    expect(element.querySelector('.card-content').innerText).toBe("mockedDescription")
  });
});


class MockedTodoResource implements TodoResource {
  todoResources: TodoItem[] = [{
    resourceId: "1",
    title: "mockedTitle",
    description: "mockedDescription",
    markedDone: true,
    createdAt: "_",
  }];
  _links: LinkItem = {} as LinkItem;
  accessed: AccessedItem = {} as AccessedItem;
  page: PageMetadata = {} as PageMetadata;

  mockId: string;


  constructor(mockedId: string) {
    this.mockId = mockedId;
  }
}
