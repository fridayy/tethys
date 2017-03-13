import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {TodoItem} from "../../models/todoItem";
import {TodoItemImpl} from "../../models/impl/todoItemImpl";

@Component({
  selector: 'app-todo-add-modal',
  templateUrl: 'todo-add-modal.component.html',
  styleUrls: ['todo-add-modal.component.css']
})
export class TodoAddModalComponent implements OnInit {

  @Output() todoItem: EventEmitter<TodoItem> = new EventEmitter();
  private open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    let item: TodoItem = new TodoItemImpl();
    item.resourceId = "";
    item.title = form.title;
    item.description = form.description;
    item.markedDone = false;
    item.createdAt = new Date().toISOString();

    this.todoItem.emit(item);
    this.openForm();
  }

  openForm(): void {
    this.open = !this.open;
  }
}
