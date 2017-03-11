import {Component, OnInit} from "@angular/core";
import {ServiceB} from "./service-b.service";
import {ServiceA} from "./service-a.service";
/**
 * Created by bnjm on 3/11/17.
 */


@Component({
  selector: 'simple-component',
  providers: [{
    provide: ServiceA,
    useFactory: () => { return new ServiceB}
  }],
  template: '<h1>SimpleComponent</h1>'
})
export class SimpleComponent implements OnInit {
  constructor(private service: ServiceA) {
  }

  ngOnInit(): void {
    this.service.doStuff(); // will output service B!
  }

}
