import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from "./todo/todo.component";
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
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
    TodoComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Root component
})
export class AppModule { }
