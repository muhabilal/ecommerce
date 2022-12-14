import React from "react";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import Card from "../../Components/Card";
import "./Contact.css";
function Contactus() {
  return (
    <>
      <NavBar />
      <div class="row mt-5">
        <div class="col-sm-4">
          <Card
            title="Email"
            description="through email"
            pic="gmail.jpg"
            height="300px"
            Link="Go to Mail"
          />
        </div>
        <div class="col-sm-4">
          <Card
            title="Yahoo"
            description="Through yahoo"
            pic="Yahoo.jpg"
            height="300px"
            Link="Go to Yahoo"
          />
        </div>
        <div class="col-sm-4">
          <Card
            title="Hotmail"
            description="Through Hotmail"
            pic="hotmail.png"
            height="300px"
            Link="Go to Hotmail"
          />
        </div>
      </div>
      <div
        className="container mb-5 mt-5 p-4"
        style={{ backgroundColor: "grey" }}
      >
        <a className="one" title="Share on whatsapp">
          <div className="container bg-black d-flex justify-content-center w-50">
            <h1>+3157722418</h1>
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
