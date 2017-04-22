import {Component, OnInit, Input} from '@angular/core';
import {MdSnackBar} from "@angular/material";


@Component({
  selector: 'app-notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.css']
})
export class NotificationComponent {

  private _notificationMessage: string;

  constructor() {

  }


  get notificationMessage(): string {
    return this._notificationMessage;
  }

  @Input() set notificationMessage(value: string) {
    if (value != undefined) {
      this._notificationMessage = value;
    }
  }

  close() {
    this._notificationMessage = undefined;
  }
}
