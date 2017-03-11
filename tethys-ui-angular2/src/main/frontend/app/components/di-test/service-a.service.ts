import {Injectable} from "@angular/core";
/**
 * Created by bnjm on 3/11/17.
 */

@Injectable()
export class ServiceA {
  doStuff(): void {
    console.log("serviceA")
  }
}
