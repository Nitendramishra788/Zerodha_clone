import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mt-3 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start">
            
            <li className="nav-item">
              <Link className="nav-link active" to="/Signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/Products">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/Pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/Support">
                Support
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;