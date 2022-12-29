import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function AddToCart(props) {
  const [item, setItem] = useState(1);
  const onPlus = () => {
    setItem(item + 1);
  };
  const onMinus = () => {
    if (item == 1) {
      return;
    } else {
      setItem(item - 1);
    }
    // item == 1 ? {return;} : setItem(item - 1);
  };
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3 row">
            <p>Quantity</p>
            <div class="d-grid gap-2 d-flex ">
              <input value={item} style={{ width: "10%" }} />
              <button class="btn btn-primary" type="button" onClick={onMinus}>
                <RemoveIcon />
              </button>
              <button class="btn btn-primary" type="button" onClick={onPlus}>
                <AddIcon />
              </button>
            </div>
            {/* <div className="container mt-3 d-flex d-grid gap-2">
              <label>Price:</label>
              <p>676</p>
            </div> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToCart;
