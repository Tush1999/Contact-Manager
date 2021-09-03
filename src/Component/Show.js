import React, { Component } from "react";
import "./style.css";

export default class Show extends Component {
  handleDelete = (id) => {
    this.props.delete(id);
  };
  render() {
    var contactData = this.props.data.map((value) => {
      return (
        <React.Fragment>
          <div className="inner-flex">
            <img
              className="user"
              src="https://www.freeiconspng.com/uploads/computer-user-icon-28.png"
              alt="Computer User Icon Svg"
            />
            <div className="content">
              <p className="">
                {value.firstName} {value.lastName}
              </p>
              <p> {value.email}</p>
            </div>
            <button
              className="remove-btn"
              onClick={() => this.handleDelete(value.id)}
            >
              REMOVE
            </button>
          </div>
        </React.Fragment>
      );
    });
    return <div className="flex-box">{contactData}</div>;
  }
}
