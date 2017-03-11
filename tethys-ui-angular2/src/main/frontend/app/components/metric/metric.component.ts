/**
 * Created by bnjm on 3/11/17.
 */
import {Component, OnInit} from "@angular/core";
import {MetricProviderService} from "../../services/metrc-provider.service";
import {Metrics} from "../../models/metrics";
import {MetricResource} from "../../models/metricResource";
import {Observable} from "rxjs";

@Component({
  selector: 'app-metric',
  templateUrl: 'metric.component.html',
  styleUrls: ['metric.component.css'],
  providers: [MetricProviderService]
})
export class MetricComponent implements OnInit {

  private title: string = "Metrics";
  private metrics: Metrics;

  constructor(private metricProviderService: MetricProviderService) { }

  ngOnInit(): void {
    this.metrics = this.metricProviderService.getMetrics();
  }

}
