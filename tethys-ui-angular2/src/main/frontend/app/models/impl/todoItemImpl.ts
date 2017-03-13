import {TodoItem} from "../todoItem";
/**
 * Created by bnjm on 3/13/17.
 */
export class TodoItemImpl implements TodoItem {
  resourceId: string = "";
  title: string = "";
  description: string = "";
  markedDone: boolean = false;
  createdAt: string = "";


  constructor() {
  }
}
