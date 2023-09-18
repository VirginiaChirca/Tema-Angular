import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-view-single-todo',
  templateUrl: './view-single-todo.component.html',
})
export class ViewSingleTodoComponent implements OnInit {
  todo: Todo | null = null;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;

    // Restul codului rămâne neschimbat
    this.todoService.getTodoById(id).subscribe((todo) => {
      this.todo = todo;
    });
  }
}

