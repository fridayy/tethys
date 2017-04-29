import {TodoResource} from "../todoResource";
import {TodoItem} from "../todoItem";
import {LinkItem} from "../linkItem";
import {AccessedItem} from "../accessedItem";
import {PageMetadata} from "../pageMetadata";


export class TodoResourceImpl implements TodoResource {
  todoResources: TodoItem[];
  _links: LinkItem;
  accessed: AccessedItem;
  page: PageMetadata = {} as any;


  constructor() {
  }
}
