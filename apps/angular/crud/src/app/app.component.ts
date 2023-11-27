import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { randText } from '@ngneat/falso';
import { TodoService } from './services/todo.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todos$ | async">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  todos!: any[];

  todos$ = this.todoService.getTodos();

  constructor(
    private http: HttpClient,
    private todoService: TodoService,
  ) {}

  update(todo: any) {
    this.http
      .put<any>(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        JSON.stringify({
          todo: todo.id,
          title: randText(),
          body: todo.body,
          userId: todo.userId,
        }),
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )
      .subscribe((todoUpdated: any) => {
        this.todos[todoUpdated.id - 1] = todoUpdated;
      });
  }
}
