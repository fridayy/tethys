import {Component, OnInit, EventEmitter, Output, AfterViewInit} from '@angular/core';
import {TodoResource, TodoResourceImpl} from "../../models/todoResource";
import {TodoProviderService} from "../../services/todo-provider.service";
import {PagedTodoResource, PagedTodoResourceImpl} from "../../models/pagedTodoResource";
import {PageMetadata, PageMetadataImpl} from "../../models/pageMetadata";


@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  providers: [TodoProviderService] // Register the service
})
export class TodoComponent implements OnInit {

  private title: string = 'Todos';
  private todoResource: TodoResource;

  @Output() pageMetaDataEvent: EventEmitter<PageMetadataImpl> = new EventEmitter();

  constructor(private todoProviderService: TodoProviderService) {}

  ngOnInit() {
    this.getTodoResources();
  }


  getTodoResources(): void {
    this.todoResource = this.todoProviderService.getAll();
    this.pageMetaDataEvent.emit(this.todoResource.page);
  }
}
