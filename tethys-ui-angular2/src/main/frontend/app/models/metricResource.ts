import {Metrics} from "./metrics";
/**
 * Created by bnjm on 3/11/17.
 */
export interface MetricResource {
  asserts:boolean,
  generator: string,
  metrics: Metrics
}
