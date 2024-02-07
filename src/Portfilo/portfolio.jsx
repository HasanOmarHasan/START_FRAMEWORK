import React, { Component } from "react";
import baguetteBox from "baguettebox.js/dist/baguetteBox";
import "baguettebox.js/dist/baguetteBox.min.css";
import img1 from "../Images/poert1.png";
import img2 from "../Images/port2.png";
import img3 from "../Images/port3.png";

export default class Portfolio extends Component {
  componentDidMount() {
    baguetteBox.run(".gallery");
  }
  render() {
    return (
      <>
        <div className="d-flex container align-items-center py-5 mt-5 flex-column ">
          <h1 className=" my-3 fw-bold ">PORTFOLIO COMPONENT</h1>

          <div className="mb-3 d-flex align-items-center ">
            <div className="line me-3 bg-dark"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-dark"></div>
          </div>

          <div className="gallery">
            <div className="row gy-4">
              <div className="col-sm-12 col-md-4 ">
                <div className="position-relative gallery-item ">
                  <a href={`${img1}`} className="lightbox">
                    <img
                      src={`${img1}`}
                      className="w-100 rounded-3"
                      alt="Image1"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 ">
                <div className="gallery-item position-relative">
                  <a href={`${img2}`} className="lightbox">
                    <img
                      src={`${img2}`}
                      className="w-100 rounded-3  "
                      alt="Image2"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 ">
                <div className="gallery-item position-relative">
                  <a href={`${img3}`} className="lightbox">
                    <img
                      src={`${img3}`}
                      className="w-100 rounded-3 "
                      alt="Image3"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 ">
                <div className="position-relative gallery-item ">
                  <a href={`${img1}`} className="lightbox">
                    <img
                      src={`${img1}`}
                      className="w-100 rounded-3"
                      alt="Image1"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 ">
                <div className="gallery-item position-relative">
                  <a href={`${img2}`} className="lightbox">
                    <img
                      src={`${img2}`}
                      className="w-100 rounded-3  "
                      alt="Image2"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 ">
                <div className="gallery-item position-relative">
                  <a href={`${img3}`} className="lightbox">
                    <img
                      src={`${img3}`}
                      className="w-100 rounded-3 "
                      alt="Image3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
