import {Injectable} from '@angular/core';
import {TodoResource, TodoResourceImpl} from "../models/todoResource";
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {PagedTodoResource, PagedTodoResourceImpl} from "../models/pagedTodoResource";
import {PageMetadata, PageMetadataImpl} from "../models/pageMetadata";
import {HttpService} from "./http.service";
import {AccessedItem, AccessedItemImpl} from "../models/accessedItem";

/**
 * TodoProviderService - Fetches and modifies TodoResources from the backend API.
 *
 * @author
 */
@Injectable()
export class TodoProviderService extends HttpService<any> {

  private allTodosUrl:string = 'http://localhost:8000/v1/todos?page=0&size=10000000';
  private pagedTodoUrl:string = 'http://localhost:8000/v1/todos';

  constructor(http: Http) { super(http) }

  /**
   * Transforms a TodoResource from the backend to a frontend TodoResource
   * @returns {TodoResource}
   */
  getAll(): TodoResource {
    let todoResource: TodoResource = new TodoResourceImpl();
    let pageMetaData: PageMetadata = new PageMetadataImpl();
    let accessed: AccessedItem = new AccessedItemImpl();
      super.get(this.allTodosUrl).subscribe(
        data => {
          todoResource.todoResources = data._embedded.todoResources;
          accessed.creationTime = data.accessed.creationTime;
          pageMetaData.totalElements = data.page.totalElements;
          pageMetaData.totalPages = data.page.totalPages;
          pageMetaData.number = data.page.number;
          pageMetaData.size = data.page.size;
        },
        err => {console.error(err)}
      );
    todoResource.accessed = accessed;
    todoResource.page = pageMetaData;
    return todoResource;
  }

  delete(): void {}
}
