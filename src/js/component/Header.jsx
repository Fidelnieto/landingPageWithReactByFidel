import React from "react";

function Header() {
  return (
    <div className="p-0 m-0">
      <nav
        className="navbar navbar-expand-lg bg-dark"
        style={{ maxHeight: "80px", height: "64px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-light fs-3 ms-3 col-6" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler bg-light px-2"
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
            className="container-fluid collapse navbar-collapse bg-dark col-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link active text-light fs-5 mx-3"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link text-light fs-5 mx-3" href="#">
                About
              </a>
              <a className="nav-link text-light fs-5 mx-3" href="#">
                Services
              </a>
              <a className="nav-link text-light fs-5 mx-3" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
