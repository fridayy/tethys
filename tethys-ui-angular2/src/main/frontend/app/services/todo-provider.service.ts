import {Injectable} from '@angular/core';
import {TodoResource} from "../components/todo/todoResource";
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {PagedTodoResource, PagedTodoResourceImpl} from "../components/todo/pagedTodoResource";
import {PageMetadata} from "../components/todo/pageMetadata";

/**
 * TodoProviderService - Fetches and modifies TodoResources from the backend API.
 *
 * @author
 */
@Injectable()
export class TodoProviderService {

  private allTodosUrl:string = 'http://localhost:8000/v1/todos?page=0&size=10000000';
  private pagedTodoUrl:string = 'http://localhost:8000/v1/todos';

  constructor(private http: Http) {
  }

  getAll(): Promise<TodoResource[]> {
    return this.http.get(this.allTodosUrl)
      .toPromise()
      .then(response => response.json()._embedded.todoResources)
      .catch(this.handleError);
  }


  getPaged(page: number, size: number): Promise<PagedTodoResource> {
    const url = `http://localhost:8000/v1/todos?page=${page}&size=${size}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .then(json => new PagedTodoResourceImpl(json._embedded.todoResources as TodoResource[], json.page as PageMetadata))
      .catch(this.handleError);
  }

  delete(resource:TodoResource):Promise<void> {
    const url = `http://localhost:8000/v1/todo/${resource.resourceId}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured: ', error);
    return Promise.reject(error.message || error);
  }

}
