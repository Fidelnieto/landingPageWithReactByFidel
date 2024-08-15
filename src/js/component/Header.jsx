import React from "react";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      style={{ maxHeight: "80px", height: "80px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-light fs-1" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="container-fluid collapse navbar-collapse bg-dark"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <a
              className="nav-link active text-light fs-2"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link text-light fs-2" href="#">
              About
            </a>
            <a className="nav-link text-light fs-2" href="#">
              Services
            </a>
            <a className="nav-link text-light fs-2" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
