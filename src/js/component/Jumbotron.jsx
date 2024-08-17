import React from "react";

const Jumbotron = (props) => {
  return (
    <div
      className="container mt-3 mb-3 pb-5 pt-3 col-lg-12 col-md-12 col-11"
      style={{
        maxHeight: "600px",
        background: "lightgray",
        maxWidth: "96.5%",
      }}
    >
      <h1 className="mx-3 mt-2" style={{ fontSize: "55px" }}>
        {props.title}
      </h1>
      <p className="fs-5 mx-3 mb-4">{props.paragraph}</p>
      <a href={props.buttonUrl} className="btn btn-primary mx-3">
        {props.buttonLabel}
      </a>
    </div>
  );
};

export default Jumbotron;
