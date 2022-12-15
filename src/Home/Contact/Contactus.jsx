import React from "react";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import Card from "../../Components/Card";
function Contactus() {
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
      <Footer />
    </>
  );
}

export default Contactus;
