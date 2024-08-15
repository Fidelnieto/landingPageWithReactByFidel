import React from "react";

function Card() {
  return (
    <div className="card col-12 col-sm-6 col-lg-3 rounded-5 border border-0 mb-3 mt-3">
      <img
        src="https://www.uri.edu/wordpress/wp-content/uploads/home/sites/7/500x333.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body border">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="border-top p-0 m-0 col-12">
          <a
            href="#"
            className="btn btn-primary d-flex justify-content-center col-6 mx-auto my-2 mt-3"
          >
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
