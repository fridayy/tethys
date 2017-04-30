import {Component, Input, Output, EventEmitter} from "@angular/core";
import {TodoResource} from "../../models/todoResource";
import {TodoItem} from "../../models/todoItem";


@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
})
export class TodoListComponent {
  private _todoResources: TodoResource;

  @Output() delete: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<TodoItem> = new EventEmitter();

  @Input() set todoResources(todoResource: TodoResource) {
    this._todoResources = todoResource;
  }

  get todoResources(): TodoResource {
    return this._todoResources;
  }

  deleteEvent(event: TodoItem) {
    this.delete.emit(event);
  }

  updateStatusEvent(event: TodoItem) {
    event.markedDone = !event.markedDone;
    this.update.emit(event);
  }
}
