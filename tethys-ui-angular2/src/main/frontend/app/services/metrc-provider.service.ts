import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {Metrics, MetricsImpl} from "../models/metrics";
import {Http} from "@angular/http";
import {MetricResource} from "../models/metricResource";
import {Observable} from "rxjs";
/**
 * Created by bnjm on 3/11/17.
 */

@Injectable()
export class MetricProviderService extends HttpService<MetricResource> {

  private url: string = "http://localhost:8000/v1/metrics?url=http://localhost:4200/#/todos";


  constructor(http: Http) {
    super(http);
  }

  /**
   * Transforms an Obeservable with provided data from the backend to a MetricsObject
   * @returns {Metrics}
   */
  getMetrics(): Metrics {
    let obj: Metrics = new MetricsImpl();
    super.get(this.url).subscribe(
      data => {
          Object.keys(data.metrics).forEach((k) => obj.items.push({key: k, value: data.metrics[k]}));
      },
      err => {console.error(err)});
    return obj;
  }
}
