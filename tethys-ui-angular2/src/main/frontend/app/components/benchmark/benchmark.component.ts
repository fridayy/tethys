import {
  Component, OnInit, AfterViewChecked, AfterContentChecked
} from '@angular/core';
import {DataStore} from "../../commons/DataStore";
import {Stopwatch} from "../../commons/Stopwatch";


@Component({
  selector: 'app-benchmark',
  templateUrl: 'benchmark.component.html',
  styleUrls: ['benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {
  ngOnInit(): void {
  }

  private title: string = "Benchmark";
  private dataStore: any;
  private count: number;
  private data: Array<any>;



  constructor() {
    this.count = 1000;
    this.dataStore = new DataStore();
    this.data = this.dataStore.getData();
  }


  startBenchmark(): void {
    this.dataStore.run(this.count);
    this.data = this.dataStore.getData();
  }

  onSubmit(form: any): void {
    this.count = form.count;
    this.startBenchmark();
  }

  onDelete(): void {
    this.dataStore.clear();
    this.data = this.dataStore.getData();
  }

  onUpdate(): void {
    this.data = this.dataStore.update();
    this.data = Array.of(this.data)[0];
  }
}
