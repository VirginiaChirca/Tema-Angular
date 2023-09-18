import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { ViewSingleTodoComponent } from './view-single-todo/view-single-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewTodosComponent,
    DeleteTodoComponent,
    ViewSingleTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
