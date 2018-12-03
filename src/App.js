import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
//import "./style/App.css";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/TodoItem";
import LoginPage from "./components/LoginPage";

import PlannedTask from "./components/PlannedTask";
import Today from "./components/Today";
import OverDue from "./components/OverDue";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="App">
            <div className="todo-wrapper">
              <Header />
            </div>
          </div>

          <ul className="header">
            <li>
              <NavLink to="/">Planned Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/Today">Today's Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/OverDue">Over Due Tasks</NavLink>
            </li>
          </ul>

          <div className="content">
            <Route exact path="/" component={PlannedTask} />
            <Route path="/Today" component={Today} />
            <Route path="/OverDue" component={OverDue} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
