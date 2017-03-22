import {Component, OnInit, Input} from '@angular/core';
import {MdSnackBar} from "@angular/material";


@Component({
  selector: 'app-notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.css']
})
export class NotificationComponent {

  private _message: string;

  constructor() {

  }


  get message(): string {
    return this._message;
  }

  @Input() set message(value: string) {
    if (value != undefined) {
      this._message = value;
    }
  }

  close() {
    this._message = undefined;
  }
}
