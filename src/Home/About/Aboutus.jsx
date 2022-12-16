import React, { useState } from "react";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import Card from "../../Components/Card";
function Aboutus() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <NavBar />
      <div class="row mt-5">
        <div class="col-sm-4">
          <Card
            height="300px"
            pic="builders.webp"
            title="Simplicity in Design"
            description="Our professionals designer Ecommerece Website is user friendly and use light color scheming. Even a single person can easily understand the flow of purchasing products."
            Link="See more"
          />
        </div>
        <div class="col-sm-4">
          <Card
            height="300px"
            pic="mission.jpg"
            title="Our Mission"
            description="Our mission is to provide user a single platform to buy products in reasonable prices. User can easily use different types of payment methods."
            Link="See more"
          />
        </div>
        <div class="col-sm-4">
          <Card
            height="300px"
            pic="fabrics.webp"
            title="Our Fabrics"
            description="Our Clothing stuff is exactly same which is mention below in the products. Our first periority is to provide good stuff to our customers."
            Link="See more"
          />
        </div>
      </div>
      <div className="container">
        <div className="container mt-5">
          <div class="card mb-3 bg-light">
            <div className="row ">
              <h1>Our Services</h1>
              <div className="col-sm-4">
                <Card
                  height="200px"
                  pic="onlinePayment.jpg"
                  description="Our mission is to provide user a single platform to buy products in reasonable prices. User can easily use different types of payment methods."
                />
              </div>
              <div className="col-sm-4">
                <Card
                  height="200px"
                  pic="creditcard.jpg"
                  description="Our mission is to provide user a single platform to buy products in reasonable prices. User can easily use different types of payment methods."
                />
              </div>
              <div className="col-sm-4">
                <Card
                  height="200px"
                  pic="security.jpg"
                  description="Our mission is to provide user a single platform to buy products in reasonable prices. User can easily use different types of payment methods."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
