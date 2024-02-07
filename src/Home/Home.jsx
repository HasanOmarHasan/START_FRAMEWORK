import React, { Component } from "react";
import persomImg from "../Images/avataaars.svg";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className=" bg-main text-light mt-5">
          <div className="d-flex container align-items-center py-5 flex-column ">
            <img src={persomImg} alt="person" className="w-25 mb-4" />

            <h1 className="text-center my-3 fw-bold">START FRAMEWORK</h1>

            <div className=" mb-3 d-flex align-items-center">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>

            <p className="mb-4">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </>
    );
  }
}
