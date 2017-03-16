import {Component, Input, OnChanges, SimpleChanges, AfterViewChecked, EventEmitter, Output} from "@angular/core";
import {Stopwatch} from "../../commons/Stopwatch";
/**
 * Created by bnjm on 3/15/17.
 */

@Component({
  selector: 'app-benchmark-table',
  templateUrl: 'benchmark-table.component.html',
  styleUrls: ['benchmark-table.component.css']
})
export class BenchmarkTableComponent implements OnChanges, AfterViewChecked {
  private _data: Array<any>;
  private watch: Stopwatch;
  private started: boolean = false;


  constructor() {
    this.started = false;
  }

  ngAfterViewChecked(): void {
    if (this.started === true && this.watch !== undefined) {
      this.watch.stop();
      this.watch = undefined;
      this.started = false;
    }
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  get data(): Array<any> {
    return this._data;
  }

  @Input() set data(value: Array<any>) {
    console.log(value);
    this._data = value;
    this.watch = new Stopwatch("Stopwatch");
    this.watch.start();
    this.started = true;
  }
}
