import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="text-center  text-light  ">
          <div className="main-footer">
            <div className="container">
              <div className="row py-md-5 py-sm-3">
                <div className="col-md-4 py-4">
                  <div className="footer-title fs-3 fw-semibold mb-1">
                    LOCATION
                  </div>
                  <div className="footer-content">
                    2215 John Daniel Drive <br /> <br />
                    Clark, MO 65243
                  </div>
                </div>
                <div className="col-md-4 py-4">
                  <div className="footer-title fs-3 fw-semibold mb-1">
                    AROUND THE WEB
                  </div>
                  <div className="footer-content">
                    <div className="d-flex justify-content-center">
                      <i className="fa-brands fa-facebook social-icon"></i>
                      <i className="fa-brands fa-twitter social-icon"></i>
                      <i className="fa-brands fa-linkedin social-icon"></i>
                      <i className="fa-solid fa-globe social-icon"></i>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 py-4">
                  <div className="footer-title fs-3 fw-semibold mb-1">
                    ABOUT FREELANCER
                  </div>
                  <div className="footer-content">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right py-4 ">
            <small>Copyright © Your Website 2021</small>
          </div>
        </footer>
      </>
    );
  }
}
