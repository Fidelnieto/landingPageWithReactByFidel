import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="row d-flex mx-auto col-12" style={{}}>
      <Card
        imgUrl="https://i.etsystatic.com/40317824/r/il/339134/4827441773/il_1080xN.4827441773_887m.jpg"
        cardTitle="Card Title"
        cardText="Testing this prop thing with the card number one!"
        cardButtonUrl="#"
        cardButtonLabel="Find out more!"
      />

      <Card
        imgUrl="https://media.gqmagazine.fr/photos/64625017a35e700534ed9634/4:3/w_959,h_719,c_limit/ZELDA.jpeg"
        cardTitle="Card Title"
        cardText="Testing this prop thing with the card that is the number two!"
        cardButtonUrl="#"
        cardButtonLabel="Find out more!"
      />

      <Card
        imgUrl="https://www.uri.edu/wordpress/wp-content/uploads/home/sites/7/500x333.png"
        cardTitle="Card Title"
        cardText="Testing this prop thing with the card"
        cardButtonUrl="#"
        cardButtonLabel="Find out more!"
      />

      <Card
        imgUrl="https://www.uri.edu/wordpress/wp-content/uploads/home/sites/7/500x333.png"
        cardTitle="Card Title"
        cardText="Testing this prop thing with the card"
        cardButtonUrl="#"
        cardButtonLabel="Find out more!"
      />
    </div>
  );
};

export default CardSection;
