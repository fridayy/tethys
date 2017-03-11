import {Metric} from "./metric";
/**
 * A generic Phantomas metrics object consisting out of an Array which contains the selected metrics.
 *
 * Created by bnjm on 3/11/17.
 */
export interface Metrics {
  items: Array<Metric>
}

export class MetricsImpl implements Metrics {
  items: Array<Metric>;

  constructor() {
    this.items = [];
  }
}
