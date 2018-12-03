import React from "react";
//import "../style/todoItem.css";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    };

    this.changeStatus = this.changeStatus.bind(this);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  changeStatus(e) {
    this.setState({
      status: e.target.checked
    });
  }

  render() {
    return (
      <div className="todoWrapper">
        <div class="row">
          <div class="col-md-1">
            <input
              type="checkbox"
              onChange={this.changeStatus}
              aria-label={
                this.props.todo.text +
                " " +
                this.props.priority +
                " " +
                this.props.dueDate
              }
            />
          </div>
          <div class="col-md-3">{this.props.todo.text}</div>
          <div class="col-md-3">{this.props.todo.priority}</div>
          <div class="col-md-2">{this.props.todo.dueDate}</div>
          <div class="col-md-2">
            <button
              class="removeTodo"
              onClick={e => this.removeTodo(this.props.id)}
              aria-label={"Remove " + this.props.todo.text + " Task"}
            >
              <i class="fa fa-trash-o" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
