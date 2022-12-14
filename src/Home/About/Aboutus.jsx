import React, { useState } from "react";

import Footer from "../../Components/Footer";
import { Button } from "react-bootstrap";
import NavBar from "../../Components/NavBar";
import CenterModal from "../../Components/CenterModal";

function Aboutus() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <NavBar />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
      <Footer />
    </>
  );
}

export default Aboutus;
