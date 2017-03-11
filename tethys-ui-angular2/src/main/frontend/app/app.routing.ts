import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {TodoComponent} from "./components/todo/todo.component";
import {ErrorComponent} from "./components/error/error.component";
import {MetricComponent} from "./components/metric/metric.component";
/**
 * Created by bnjm on 3/11/17.
 */

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todos', component: TodoComponent},
  {path: 'metrics', component: MetricComponent},
  {path: '**', component: ErrorComponent}
];

export const routing = RouterModule.forRoot(routes);
