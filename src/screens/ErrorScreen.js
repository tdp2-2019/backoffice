import React, { Component } from "react";

const errorImageUrl =
  "https://careers.avanade.com/jscore/images/http/fatal.png";

class ErrorScreen extends Component {
  render() {
    return (
      <div className="ErrorScreen">
        <img src={errorImageUrl} alt="error" />
        <h2>Sorry, something went wrong.</h2>
      </div>
    );
  }
}

export default ErrorScreen;
