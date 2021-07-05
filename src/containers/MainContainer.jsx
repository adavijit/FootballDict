import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HomeIcon from "../assets/home.png";
export class MainContainer extends Component {
  getTempText = () => {
    if (this.props.location.pathname === "/players") {
      return `Add new player >`;
    }
    return "< Back to player list";
  };
  redirectToPatch = () => {
    if (this.props.location.pathname === "/players") {
      this.props.history.push("/players/add");
    } else {
      this.props.history.push("/players");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={"main-container-header"}>
          <span>
            <img
              src={HomeIcon}
              alt="home"
              onClick={() => this.props.history.push("/")}
            />
          </span>
          <p onClick={() => this.redirectToPatch()}>{this.getTempText()}</p>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default withRouter(MainContainer);
