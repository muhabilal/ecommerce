import React from "react";
import CardForPrices from "../../Components/CardForPrices";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";

function WinterMen() {
  const FirstObj = { title: "Huddy", pic: "huddyMen.jpg" };
  const SecondObj = { title: "Sweater", pic: "sweaterMen.jpg" };
  const ThirdObj = { title: "Casual Shirts", pic: "casualShirt.webp" };
  return (
    <>
      <NavBar />
      <div className="row " style={{ height: "400px" }}>
        <div
          className="container-fluid col-2 p-3"
          style={{ border: "2px solid black" }}
        >
          <h1>hhh</h1>
          <p>jhhjh</p>
        </div>
        <div className="container-fluid col-10 p-3">
          <h1>Winter Collection for Men!</h1>
          <div className="row">
            <div className="col-sm-4">
              <CardForPrices object={FirstObj} />
            </div>
            <div className="col-sm-4">
              <CardForPrices object={SecondObj} />
            </div>
            <div className="col-sm-4">
              <CardForPrices object={ThirdObj} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WinterMen;
