/**
 * Created by bnjm on 3/11/17.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'app-err',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.css']
})
export class ErrorComponent {
  private errorMessage: string = "404 - An error occurred!";
}
