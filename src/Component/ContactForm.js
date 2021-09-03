import React, { Component } from "react";
import Form from "./Form";
import Show from "./Show";
import "./style.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      searchField: "",
    };
    this.initialState = this.state;
  }
  addData = (val) => {
    this.setState({ list: [...this.state.list, val] });
  };
  handleDelete = (id) => {
    let a = this.state.list.filter((val) => val.id !== id);
    this.setState({ list: a });
  };
  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    let filteredData = this.state.list.filter(
      (val) =>
        val.email.includes(this.state.searchField) ||
        val.firstName.includes(this.state.searchField) ||
        val.lastName.includes(this.state.searchField)
    );
    return (
      <React.Fragment>
        <div className="search-div"> </div>
        <div>
          <input
            type="search"
            placeholder="search here..."
            onChange={this.handleSearch}
          />
        </div>
        <Form add={this.addData} />

        <Show data={filteredData} delete={this.handleDelete} />
      </React.Fragment>
    );
  }
}
