import React, { Component } from "react";

export default class Conect extends Component {
  render() {
    return (
      <>
        <div className="d-flex container align-items-center py-5  flex-column  mt-5">
          <h1 className=" my-3 fw-bold ">CONECT COMPONENT</h1>

          <div className="mb-5 d-flex align-items-center ">
            <div className="line me-3 bg-dark"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-dark"></div>
          </div>

          <div className="form w-50 pt-5 mt-4 pb-3">
            <div className="form-grop position-relative">
              <input
                type="text"
                className=" input-field border-0 py-3 border-bottom form-control mb-4 "
                placeholder="userName "
                required
                id="userName"
              />

              <label htmlFor="userNmae" className="main-color input-label">
                userName :
              </label>
            </div>
            <div className="form-grop position-relative">
              <input
                type="number"
                className=" input-field border-0 py-3 border-bottom form-control mb-4"
                placeholder="userAge "
                required
                id="userAge"
              />
              <label htmlFor="userAge" className="main-color input-label">
                userAge :
              </label>
            </div>
            <div className="form-grop position-relative">
              <input
                type="email"
                className=" input-field border-0 py-3 border-bottom form-control mb-4"
                placeholder="userEmail "
                required
                id="userEmail"
              />
              <label htmlFor="userEmail" className="main-color input-label">
                userEmail :
              </label>
            </div>
            <div className="form-grop position-relative">
              <input
                type="password"
                className=" input-field border-0 py-3 border-bottom form-control mb-4 "
                placeholder="userPassword "
                id="userPass"
                required
              />
              <label htmlFor="userPass" className="main-color input-label">
                userPassword :
              </label>
            </div>

            <button type="submit " className="btn bg-main ">
              Sand massage
            </button>
          </div>
        </div>
      </>
    );
  }
}
