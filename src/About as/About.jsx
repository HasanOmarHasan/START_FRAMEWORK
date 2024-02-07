import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="content bg-main text-light py-5">
          <div className="d-flex container align-items-center py-5 my-5 flex-column ">
            <h1 className="text-center my-3 fw-bold">ABOUT COMPONENT</h1>

            <div className="m-0 mb-3 d-flex align-items-center">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
