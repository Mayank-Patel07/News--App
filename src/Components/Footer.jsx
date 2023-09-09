import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container ">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331" }}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "#6351ce" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <div
            className="text-center p-3"
             style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2023 Copyright:
            <a className="text-white" href="/">
              Today'sNews.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
