/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoComponent } from './todo-list.component';
import {MaterialModule} from "@angular/material";
import {TodoResource} from "../../models/todoResource";
import {TodoItem} from "../../models/todoItem";
import {LinkItem} from "../../models/linkItem";
import {AccessedItem} from "../../models/accessedItem";
import {PageMetadata} from "../../models/pageMetadata";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule.forRoot()],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todoResources = new MockedTodoResource("1");
    fixture.detectChanges();
  });

  it('should be initialized correctly', () => {
    expect(component).toBeTruthy();
    expect(component.todoResources["mockedId"]).toBe("1");
  });


  it('todo resource can be set', () => {
    expect(component.todoResources).not.toBeUndefined();
  });
});



class MockedTodoResource implements TodoResource {
  todoResources: TodoItem[] = [];
  _links: LinkItem = {} as LinkItem;
  accessed: AccessedItem = {} as AccessedItem;
  page: PageMetadata = {} as PageMetadata;

  mockedId: string;


  constructor(mockedId: string) {
    this.mockedId = mockedId;
  }
}
