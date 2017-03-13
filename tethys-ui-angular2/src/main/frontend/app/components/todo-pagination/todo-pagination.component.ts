import {Component, Input, EventEmitter, Output} from '@angular/core';
import {PageMetadata} from "../../models/pageMetadata";

@Component({
  selector: 'app-todo-pagination',
  templateUrl: 'todo-pagination.component.html',
  styleUrls: ['todo-pagination.component.css']
})
export class TodoPaginationComponent {

  private _pageMetadata: PageMetadata;
  private showAllBool: boolean;

  @Output() previous: EventEmitter<any> = new EventEmitter();
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() showAll: EventEmitter<any> = new EventEmitter();
  @Output() showLess: EventEmitter<any> = new EventEmitter();

  constructor() {
  }


  @Input() set pageMetadata(pageMetadata: PageMetadata) {
    this._pageMetadata = pageMetadata;
  }

  get pageMetadata(): PageMetadata {
    return this._pageMetadata;
  }

  previousEvent(): void {
    this.previous.emit();
  }

  nextEvent(): void {
    this.next.emit();
  }

  showAllEvent(): void {
    this.showAllBool = true;
    this.showAll.emit();
  }

  showLessEvent(): void {
    this.showAllBool = false;
    this.showLess.emit();
  }
}
