import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Nav />
        {/* <div className="container bg-main"> */}
          <Outlet />
        {/* </div> */}
        <Footer />
      </>
    );
  }
}
