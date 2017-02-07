import { Component, OnInit } from '@angular/core';
import {TodoResource} from "./todoResource";
import {TodoProviderService} from "./todo-provider.service";
import {PagedTodoResource, PagedTodoResourceImpl} from "./pagedTodoResource";
import {PageMetadata} from "./pageMetadata";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoProviderService] // Register the service
})
export class TodoComponent implements OnInit {
  title: string = 'Todos';
  todoItems: TodoResource[];
  pagedTodoResources: PagedTodoResource = new PagedTodoResourceImpl(null, null);
  pageMetadata: PageMetadata = new PageMetadata(0,0,0,0);
  pages: number[] = [];
  showAll: boolean = false;

  constructor(private todoProviderService: TodoProviderService) { }

  ngOnInit() {
    if(this.showAll) {
      this.getTodoResources();
    } else {
      this.getPagedTodoResources();
    }
  }

  getTodoResources(): void {
    this.todoProviderService
      .getAll()
      .then(result => this.todoItems = result as TodoResource[]);
  }

  setShowAll() {
    this.showAll = !this.showAll;
    this.pages = [];
    this.ngOnInit();
  }

  getPagedTodoResources(): void {
    this.todoProviderService
      .getPaged(0, 15)
      .then(result => {
        this.pagedTodoResources.resources = result.resources as TodoResource[];
        this.pageMetadata = result.pageMetadata as PageMetadata;
        for(let i = 0; i <= result.pageMetadata.totalPages; i++) {
          this.pages.push(i);
        }
      });
  }

  delete(item: TodoResource): void {
    this.todoProviderService.delete(item).then(() => {
      this.todoItems = this.todoItems.filter((i) => i !== item);
    });
  }

}
