import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {TodoComponent} from "./components/todo-list/todo-list.component";
import {ErrorComponent} from "./components/error/error.component";
import {MetricComponent} from "./components/metric/metric.component";
import {TodoMediator} from "./mediators/todo/todo-mediator.component";
import {BenchmarkComponent} from "./components/benchmark/benchmark.component";
/**
 * Created by bnjm on 3/11/17.
 */

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todos', component: TodoMediator},
  {path: 'metrics', component: MetricComponent},
  {path: 'benchmark', component: BenchmarkComponent},
  {path: '**', component: ErrorComponent}
];

export const routing = RouterModule.forRoot(routes);
