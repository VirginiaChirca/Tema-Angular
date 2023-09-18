import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
})
export class DeleteTodoComponent {
  id: number = 0;

  constructor(private todoService: TodoService) {}

  deleteTodo() {
    this.todoService.deleteTodoById(this.id).subscribe(() => {

    });
  }
}