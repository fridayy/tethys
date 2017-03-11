/**
 * Created by bnjm on 3/11/17.
 */
import {Component} from "@angular/core";
import {TodoResource} from "../../models/todoResource";
import {PageMetadata} from "../../models/pageMetadata";
@Component({
  selector: 'todo-mediator',
  templateUrl: 'todo-mediator.component.html',
  styleUrls: ['todo-mediator.component.css']
})
export class TodoMediator {
  pageMetadata: PageMetadata;

  pageMetaDataEventHandler(event: PageMetadata) {
    this.pageMetadata = event;
  }
}
