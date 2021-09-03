import React, { Component } from "react";
import "./style.css";
const { v4: uuid_v4 } = require("uuid");

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      id: "",
      formErrors: {},
    };
    this.initialState = this.state;
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  checkInput = () => {
    const { firstName, lastName, email } = this.state;
    let formErrors = {};
    var formIsValid = true;
    if (!firstName) {
      formIsValid = false;
      formErrors["firstName"] = "First Name field is required";
    }
    if (!lastName) {
      formIsValid = false;
      formErrors["lastName"] = "Last Name field is required";
    }
    if (!email) {
      formIsValid = false;
      formErrors["email"] = "Email field is required";
    }
    this.setState({ formErrors: formErrors });
    return formIsValid;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.checkInput()) {
      this.props.add({ ...this.state, id: uuid_v4() });
      this.setState(this.initialState);
    }
  };
  render() {
    const { firstName, lastName, email } = this.state.formErrors;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="first-div">
          <label htmlFor="first">First Name:</label>
          <input
            className="first"
            type="text"
            value={this.state.firstName}
            id="first"
            name="firstName"
            onChange={this.handleChange}
            autoFocus
          />
          {firstName ? <p className="select">{firstName}</p> : null}
        </div>
        <div className="last-div">
          <label htmlFor="last">Last Name:</label>
          <input
            className="last"
            type="text"
            value={this.state.lastName}
            id="last"
            name="lastName"
            onChange={this.handleChange}
          />
          {lastName ? <p className="select">{lastName}</p> : null}
        </div>
        <div className="email-div">
          <label htmlFor="email">Email:</label>
          <input
            className="email"
            type="email"
            value={this.state.email}
            id="email"
            name="email"
            onChange={this.handleChange}
          />
          {email ? <p className="select">{email}</p> : null}
        </div>
        <button className="submit-btn">CREATE</button>
      </form>
    );
  }
}
