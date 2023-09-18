import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {
  todo: Todo = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };

  constructor(private todoService: TodoService, private router: Router) {}

  addTodo() {
    this.todoService.addTodo(this.todo).subscribe(
      (addedTodo) => {
        console.log('Sarcină adăugată cu succes:', addedTodo);
        this.router.navigate(['/view']);
      },
      (error) => {
        console.error('Eroare la adăugarea sarcinii:', error);
      }
    );
  }
}
