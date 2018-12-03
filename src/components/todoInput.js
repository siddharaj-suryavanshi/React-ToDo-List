import React from "react";
//import "../style/todoInput.css";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: this.props.todoText,
      priority: this.props.priority,
      dueDate: this.props.dueDate
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange1(e) {
    this.setState({
      taskName: e.target.value,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    });
  }

  handleChange2(e) {
    this.setState({
      taskName: this.state.taskName,
      priority: e.target.value,
      dueDate: this.state.dueDate
    });
  }

  handleChange3(e) {
    this.setState({
      taskName: this.state.taskName,
      priority: this.state.priority,
      dueDate: e.target.value
    });
  }

  addTodo(taskName, priority, dueDate) {
    // Ensure a todo was actually entered before submitting
    if (taskName.length > 0) {
      this.props.addTodo(taskName, priority, dueDate);
      this.setState({
        taskName: "",
        priority: this.props.priority,
        dueDate: ""
      });
    }
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              Task Name
              <input
                type="text"
                value={this.state.taskName}
                onChange={this.handleChange1}
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              Task priority
              <select onChange={this.handleChange2} class="form-control">
                <option>None</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              Due Date
              <input
                type="date"
                value={this.state.dueDate}
                onChange={this.handleChange3}
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <button
                class="btn btn-md is-green mar-top"
                onClick={() =>
                  this.addTodo(
                    this.state.taskName,
                    this.state.priority,
                    this.state.dueDate
                  )
                }
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
