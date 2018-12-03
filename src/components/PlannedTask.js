import React from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./todoInput";

export default class PlannedTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 2
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText, priority, dueDate) {
    let todos = this.state.todos;
    todos.push({
      id: this.state.nextId,
      text: todoText,
      priority: priority,
      dueDate: dueDate
    });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div>
        <TodoInput
          todoText=""
          priority="None"
          dueDate=""
          addTodo={this.addTodo}
        />
        <h1>Planned Task</h1>
        {this.state.todos.map(todo => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              id={todo.id}
              removeTodo={this.removeTodo}
              status={todo.status}
              priority={todo.priority}
              dueDate={todo.dueDate}
            />
          );
        })}
      </div>
    );
  }
}
