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
          <Card />
        </div>
        <div class="col-sm-4">
          <Card />
        </div>
        <div class="col-sm-4">
          <Card />
        </div>
      </div>
      <div className="container">
        <div className="container mt-5">
          <div class="card mb-3 bg-light">
            <div className="row ">
              <h1>Our Services</h1>
              <div className="col-sm-4">
                <div className="card">
                  <p>hello</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <p>hello</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <p>hello</p>
                </div>
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
