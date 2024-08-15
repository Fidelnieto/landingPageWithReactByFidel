import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="container mt-3 mb-3 col-12 pb-5 pt-3"
      style={{
        maxHeight: "600px",
        background: "lightgray",
      }}
    >
      <h1 className="mx-3 mt-2" style={{ fontSize: "55px" }}>
        A Warm Welcome
      </h1>
      <p className="fs-5 mx-3 mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam totam
        placeat facere assumenda adipisci eligendi dolores eius nisi magnam
        voluptatibus numquam, voluptatum eos sequi? Harum animi nisi dolore eos
        dolorum?
      </p>
      <a href="" className="btn btn-primary mx-3">
        Call to Action!
      </a>
    </div>
  );
};

export default Jumbotron;
