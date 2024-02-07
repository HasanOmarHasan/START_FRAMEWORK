import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "",
    };
  }

  handleNavLinkClick = (link) => {
    this.setState({ activeLink: link });
  };

  handleBrandClick = () => {
    this.setState({ activeLink: "" });
  };

  render() {
    const { activeLink } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-gray py-3 fixed-top ">
          <div className="container">
            <Link
              className="navbar-brand fs-2 fw-bold"
              to="/Home"
              onClick={this.handleBrandClick}
            >
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-uppercase flex-grow-0 "
              id="navbarNav"
            >
              <ul className="navbar-nav fs-6 fw-bold  nav-pills">
                <li className="nav-item">
                  <Link
                    className={`nav-link text-light ${
                      activeLink === "/about" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/about"
                    onClick={() => this.handleNavLinkClick("/about")}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-light ${
                      activeLink === "/portfolio" ? "active" : ""
                    }`}
                    to="/portfolio"
                    onClick={() => this.handleNavLinkClick("/portfolio")}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-light ${
                      activeLink === "/contact" ? "active" : ""
                    }`}
                    to="/Conect"
                    onClick={() => this.handleNavLinkClick("/contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
