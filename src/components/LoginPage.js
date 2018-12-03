import React from "react";
import "../style/todo.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="container">
        <div class="form-group">
          <label for="ContentPlaceHolder1_txtemail" id="ContentPlaceHolder1_l1">
            E-mail:
          </label>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user" />
            </span>
            <input
              name="ctl00$ContentPlaceHolder1$txtemail"
              type="text"
              id="ContentPlaceHolder1_txtemail"
              class="form-control"
            />
          </div>
          <label
            for="ContentPlaceHolder1_txtpassword"
            id="ContentPlaceHolder1_l2"
          >
            Password:
          </label>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-lock" />
            </span>
            <input
              name="ctl00$ContentPlaceHolder1$txtpassword"
              type="password"
              id="ContentPlaceHolder1_txtpassword"
              class="form-control"
            />
          </div>
          <label
            for="ContentPlaceHolder1_txtpassword"
            id="ContentPlaceHolder1_l2"
          >
            Confirm Password:
          </label>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-lock" />
            </span>
            <input
              name="ctl00$ContentPlaceHolder1$txtpassword"
              type="password"
              id="ContentPlaceHolder1_txtpassword"
              class="form-control"
            />
          </div>
          <input
            type="submit"
            name="ctl00$ContentPlaceHolder1$btnsubmit"
            value="Sign up"
            id="ContentPlaceHolder1_btnsubmit"
            class="btn btn-lg is-orange"
          />
        </div>
      </div>
    );
  }
}

export default LoginPage;
