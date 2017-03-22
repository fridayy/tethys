import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-benchmark-table-row',
  templateUrl: './benchmark-table-row.component.html',
  styleUrls: ['./benchmark-table-row.component.css']
})
export class BenchmarkTableRowComponent {

  private _dataElement: any;


  get dataElement(): any {
    return this._dataElement;
  }

  @Input() set dataElement(value: any) {
    this._dataElement = value;
  }

  constructor() { }
}
