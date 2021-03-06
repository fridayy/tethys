import {Component, OnInit, Input} from "@angular/core";
import {TodoResource} from "../../models/todoResource";
import {PageMetadata} from "../../models/pageMetadata";

@Component({
  selector: 'app-todo-list-metadata',
  templateUrl: 'todo-list-metadata.component.html',
  styleUrls: ['todo-list-metadata.component.css']
})
export class TodoListMetadataComponent {

  private _pageMetadata: PageMetadata;

  constructor() { }


  @Input() set pageMetadata(pageMetadata: PageMetadata) {
    this._pageMetadata = pageMetadata;
  }

  get pageMetadata(): PageMetadata {
    return this._pageMetadata;
  }

}
