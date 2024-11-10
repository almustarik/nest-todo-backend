/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  // add todo
  create(todo: Todo): Todo {
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
    return todo;
  }

  // get all
  findAll(): Todo[] {
    return this.todos;
  }

  // get by id
  findOne(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  // update by id
  update(id: number, updatesTodo: Todo): Todo {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex >= 0) {
      this.todos[todoIndex] = { ...this.todos[todoIndex], ...updatesTodo };
      return this.todos[todoIndex];
    }
    return null;
  }

  // delete by id
  delete(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
