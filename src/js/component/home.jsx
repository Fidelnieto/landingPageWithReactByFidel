import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Header from "./Header";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div className="row container-fluid m-auto p-0 vh-100">
      <Header />
      <Jumbotron />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
