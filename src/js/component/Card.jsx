import React from "react";

function Card(props) {
  return (
    <div className="card col-12 col-sm-6 col-lg-3 border-0 mb-3 mt-3">
      <img
        src={props.imgUrl}
        className="card-img-top"
        alt="..."
        style={
          {
            // maxHeight: "300px",
            // maxWidth: "339px",
            // minHeight: "300px",
            // minWidth: "327px",
            // objectFit: "cover",
          }
        }
      />
      <div className="card-body border">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <div
          className=" border-top col-12 my-auto mx-auto"
          style={{ width: "100%" }}
        >
          <a
            href={props.cardButtonUrl}
            className="btn btn-primary d-flex my-auto col-8 col-lg-8 col-md-6 justify-content-center mx-auto mt-3"
          >
            {props.cardButtonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
