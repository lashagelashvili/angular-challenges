import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '@ngneat/falso';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
