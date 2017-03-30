import {
  Component, OnInit, AfterViewChecked, AfterContentChecked
} from '@angular/core';
import {DataStore} from "../../commons/DataStore";
import {Stopwatch} from "../../commons/Stopwatch";
import {validate} from "codelyzer/walkerFactory/walkerFn";


@Component({
  selector: 'app-benchmark',
  templateUrl: 'benchmark.component.html',
  styleUrls: ['benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {
  ngOnInit(): void {
  }

  private _title: string = "Benchmark";
  private _dataStore: any;
  private _count: number;
  private _data: Array<any>;



  constructor() {
    this._count = 1000;
    this._dataStore = new DataStore();
    this._data = this._dataStore.getData();
  }


  startBenchmark(): void {
    this._dataStore.run(this._count);
    this._data = this._dataStore.getData();
  }

  onSubmit(form: any): void {
    this._count = form.count;
    this.startBenchmark();
  }

  onDelete(): void {
    this._dataStore.clear();
    this._data = this._dataStore.getData();
  }

  onUpdate(): void {
    this._data = this._dataStore.update();
    this._data = Array.of(this._data)[0];
  }
}
