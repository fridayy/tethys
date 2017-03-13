import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {TodoComponent} from "./components/todo-list/todo-list.component";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {SimpleComponent} from "./components/di-test/simple.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {routing} from "./app.routing";
import {HomeComponent} from "./components/home/home.component";
import {ErrorComponent} from "./components/error/error.component";
import {MetricComponent} from "./components/metric/metric.component";
import {TodoMediator} from "./mediators/todo/todo-mediator.component";
import { TodoListMetadataComponent } from './components/todo-list-metadata/todo-list-metadata.component';
import { TodoPaginationComponent } from './components/todo-pagination/todo-pagination.component';
import {MaterialModule} from "@angular/material";
import { TodoAddModalComponent } from './components/todo-add-modal/todo-add-modal.component';
/**
 * app.module.ts
 * Angular2 modules help us organizes our application into cohesive blocḱs of functionality and provide boundaries
 * within our application.
 *
 * In the declarations array we define which components belong to this module.
 *
 * Imports array contains all external modules like angular2 modules or 3rd party modules.
 */
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    HeaderComponent,
    NavigationComponent,
    MetricComponent,
    SimpleComponent,
    ErrorComponent,
    TodoListMetadataComponent,
    TodoMediator,
    TodoPaginationComponent,
    TodoAddModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent] // Root component
})
export class AppModule {
}
