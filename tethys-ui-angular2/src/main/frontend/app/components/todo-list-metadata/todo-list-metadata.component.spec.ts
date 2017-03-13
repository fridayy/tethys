import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListMetadataComponent } from './todo-list-metadata.component';

describe('TodoListMetadataComponent', () => {
  let component: TodoListMetadataComponent;
  let fixture: ComponentFixture<TodoListMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
