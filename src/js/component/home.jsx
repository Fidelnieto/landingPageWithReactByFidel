import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Header from "./Header";
import Footer from "./Footer";
import CardSection from "./CardSection";

//create your first component
const Home = () => {
  return (
    <div className="row container-fluid m-auto p-0 vh-100">
      <Header navbarTitle="Navbar" />
      <Jumbotron
        title="A Warm Welcome"
        paragraph=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam totam
        placeat facere assumenda adipisci eligendi dolores eius nisi magnam
        voluptatibus numquam, voluptatum eos sequi? Harum animi nisi dolore eos
        dolorum?"
        buttonUrl="#"
        buttonLabel="Find out more!"
      />
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
