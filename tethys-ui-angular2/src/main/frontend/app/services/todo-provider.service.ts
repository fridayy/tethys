import {Injectable} from '@angular/core';
import {TodoResource} from "../models/todoResource";
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {PageMetadata} from "../models/pageMetadata";
import {HttpService} from "./http.service";
import {AccessedItem, AccessedItemImpl} from "../models/accessedItem";
import {LinkItem, LinkItemImpl} from "../models/linkItem";
import {PageMetadataImpl} from "../models/impl/pageMetadataImpl";
import {TodoItem} from "../models/todoItem";
import {TodoItemImpl} from "../models/impl/todoItemImpl";
import {TodoResourceImpl} from "../models/impl/todoResourceImpl";

/**
 * TodoProviderService - Fetches and modifies TodoResources from the backend API.
 *
 * @author
 */
@Injectable()
export class TodoProviderService extends HttpService<any> {

  constructor(http: Http) { super(http) }

  /**
   * Transforms a TodoResource from the backend to a frontend TodoResource
   * @returns {TodoResource}
   */
  provideTodos(url: string): TodoResource {
    let todoResource: TodoResource = new TodoResourceImpl();
    let pageMetaData: PageMetadata = new PageMetadataImpl();
    let linkItem: LinkItem = new LinkItemImpl();
    let accessed: AccessedItem = new AccessedItemImpl();
      super.get(url).subscribe(
        data => {
          todoResource.todoResources = data._embedded.todoResources;
          linkItem.self = data._links.self.href;
          accessed.creationTime = data.accessed.creationTime;
          pageMetaData.totalElements = data.page.totalElements;
          pageMetaData.totalPages = data.page.totalPages;
          pageMetaData.number = data.page.number;
          pageMetaData.size = data.page.size;
          if(data._links.prev !== undefined) {
            linkItem.prev = data._links.prev.href;
          }

          if(data._links.next !== undefined) {
            linkItem.next = data._links.next.href;
          }

          if(data._links.first !== undefined) {
            linkItem.first = data._links.first.href;
          }

          if(data._links.last !== undefined) {
            linkItem.last = data._links.last.href;
          }

        },
        err => {console.error(err)}
      );
    todoResource.accessed = accessed;
    todoResource.page = pageMetaData;
    todoResource._links = linkItem;

    return todoResource;
  }

  deleteTodo(url: string, todoItem: TodoItem): void {
    super.delete(url + "/" + todoItem.resourceId).subscribe();
  }

  updateTodo(url: string, todoItem: TodoItem):TodoItem {
    let obj: TodoItem = new TodoItemImpl();
    super.put(url, todoItem).subscribe( data => {
      obj.title = data.title;
      obj.description = data.description;
      obj.resourceId = data.resourceId;
      obj.createdAt = data.createdAt;
      obj.markedDone = data.markedDone;
    });
    return obj;
  }

  addTodo(url: string, todoItem: TodoItem): TodoItem {
    let obj: TodoItem = new TodoItemImpl();
    super.post(url, todoItem).subscribe( data => {
      obj.title = data.title;
      obj.description = data.description;
      obj.resourceId = data.resourceId;
      obj.createdAt = data.createdAt;
      obj.markedDone = data.markedDone;
    });
    return obj;
  }
}
