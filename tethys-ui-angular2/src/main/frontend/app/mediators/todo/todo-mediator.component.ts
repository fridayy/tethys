/**
 * Created by bnjm on 3/11/17.
 */
import {Component, OnInit} from "@angular/core";
import {TodoResource} from "../../models/todoResource";
import {PageMetadata} from "../../models/pageMetadata";
import {TodoProviderService} from "../../services/todo-provider.service";
import {LinkItem} from "../../models/linkItem";
import {PageMetadataImpl} from "../../models/impl/pageMetadataImpl";
import {TodoItem} from "../../models/todoItem";
import {MdSnackBar, MdDialog} from "@angular/material";
import {TodoAddModalComponent} from "../../components/todo-add-modal/todo-add-modal.component";
@Component({
  selector: 'todo-mediator',
  templateUrl: 'todo-mediator.component.html',
  styleUrls: ['todo-mediator.component.css'],
  providers: [TodoProviderService]
})
export class TodoMediator implements OnInit {

  private title: string = "Todos";
  private pageMetadata: PageMetadata;
  private todoResources: TodoResource;
  private linkMetadata: LinkItem;

  private notificationMessage: string;


  private allTodosUrl:string = 'http://localhost:8000/v1/todos?page=0&size=10000000';
  private url:string = 'http://localhost:8000/v1/todos';
  private todoUrl:string = 'http://localhost:8000/v1/todo';


  constructor(private todoProviderService: TodoProviderService, public snackBar: MdSnackBar) { }

  ngOnInit(): void {
    this.assemble(this.url);
  }

  nextEventHandler(event: number) {
    this.assemble(this.linkMetadata.next);
  }

  previousEventHandler(event: number) {
    this.assemble(this.linkMetadata.prev);
  }

  showAllEventHandler(event: boolean) {
    this.assemble(this.allTodosUrl);
  }

  showLessEventHandler(event: any) {
    this.assemble(this.url);
  }

  deleteEventHandler(item: TodoItem) {
    this.todoProviderService.deleteTodo(this.todoUrl, item);
    this.todoResources.todoResources.splice(this.todoResources.todoResources.indexOf(item), 1);
    this.pageMetadata.totalElements = this.pageMetadata.totalElements -1;

    this.notificationMessage = `Deleted: ${item.title}!`
  }


  updateEventHandler(item: TodoItem) {
    let updatedItem:TodoItem = this.todoProviderService.updateTodo(this.todoUrl, item);
    let itemToChange:number = this.todoResources.todoResources.indexOf(item);
    this.todoResources.todoResources[itemToChange] = updatedItem;


    this.snackBar.open(`Updated: ${item.title}!`, "Close", {
      duration: 2000,
    });
  }

  addEventHandler(item: TodoItem) {
    let newItem:TodoItem = this.todoProviderService.addTodo(this.todoUrl, item);
    this.todoResources.todoResources.push(newItem);
    this.snackBar.open(`Added: ${newItem.title}!`, "Close", {
      duration: 2000,
    });
  }


  private assemble(url: string) {
    this.todoResources = this.todoProviderService.provideTodos(url);
    this.pageMetadata = this.todoResources.page;
    this.linkMetadata = this.todoResources._links;
  }
}
