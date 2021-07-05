import React from "react";

export default function HomeScreen() {
  return (
    <div className={"div-body"}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand font-weight-bold" href="#">
          Portfolio.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#details">
                Details
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="home">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 content">
            <h5>Hello friend.</h5>
            <h1 className="font-weight-bold">My name is Fan</h1>
            <p>“Be yourself; everyone else is already taken.”</p>
            <div className="form-group">
              <button className="btn btn-warning rounded-pill" href="#">
                Hire me
              </button>
              <span>&nbsp; or &nbsp;</span>
              <button className="btn btn-outline-light rounded-pill" href="#">
                Tell me something
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 banner">
            <div className="img-banner" />
          </div>
        </div>
      </section>
    </div>
  );
}
