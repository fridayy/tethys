import {PageMetadata} from "./pageMetadata";
import {TodoItem} from "./todoItem";
import {LinkItem} from "./linkItem";
import {AccessedItem} from "./accessedItem";
/**
 * TodoResource - defines a TodoResource
 * Created by bnjm on 2/4/17.
 */
export interface TodoResource {
  todoResources: TodoItem[];
  _links: LinkItem;
  accessed: AccessedItem;
  page: PageMetadata;
}

export class TodoResourceImpl implements TodoResource {
  todoResources: TodoItem[];
  _links: LinkItem;
  accessed: AccessedItem;
  page: PageMetadata;
}
