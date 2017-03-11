import {TodoResource} from "./todoResource";
import {PageMetadata} from "./pageMetadata";
/**
 * Created by bnjm on 2/4/17.
 */
export interface PagedTodoResource {
  resources: TodoResource[];
  pageMetadata: PageMetadata;
}

export class PagedTodoResourceImpl implements PagedTodoResource {

  constructor(public resources: TodoResource[], public pageMetadata: PageMetadata) {
  }
}
