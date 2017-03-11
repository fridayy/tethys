/**
 * Created by bnjm on 3/11/17.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class ServiceB {
  doStuff(): void {
    console.log("serviceB")
  }
}
