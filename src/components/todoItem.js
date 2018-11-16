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
      <tr>
        <div className="todoWrapper">
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
          {this.props.todo.text} &nbsp;
          {this.props.todo.priority} &nbsp;
          {this.props.todo.dueDate} &nbsp;
          <button
            className="removeTodo"
            onClick={e => this.removeTodo(this.props.id)}
            aria-label={"Remove " + this.props.todo.text + " Task"}
          >
            remove
          </button>
          <p>
            -----------------------------------------------------------------
          </p>
        </div>
      </tr>
    );
  }
}
