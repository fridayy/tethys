/**
 * Created by bnjm on 3/17/17.
 */
import {Component} from "@angular/core";
import {Student} from "../../models/impl/studentImpl";

@Component({
  selector: 'app-hello-world',
  template: `<p change-text>{{text}}</p>`
})
export class HelloWorldComponent {
  private text: string;
  private student: Student;

  constructor() {
    this.text = "Hello World!";
    this.student = new Student("Benjamin", 28, 1234);
  }
}
