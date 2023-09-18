import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { ViewSingleTodoComponent } from './view-single-todo/view-single-todo.component';
const routes: Routes = [
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'add', component: AddTodoComponent },
  { path: 'view', component: ViewTodosComponent },
  { path: 'delete', component: DeleteTodoComponent },
  { path: 'view-single-todo/:id', component: ViewSingleTodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
