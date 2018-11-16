import React, { Component } from "react";
//import "./style/App.css";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";
import LoginPage from "./components/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          text: "Demo Task 1",
          priority: "High",
          dueDate: "13/11/2018",
          status: "open"
        },
        {
          id: 1,
          text: "Demo Task 2",
          priority: "Medium",
          dueDate: "14/11/2018",
          status: "open"
        }
      ],
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
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput
            todoText=""
            priority="None"
            dueDate=""
            addTodo={this.addTodo}
          />

          <fieldset>
            <legend>Open Tasks</legend>
            <ul>
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
            </ul>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default App;
