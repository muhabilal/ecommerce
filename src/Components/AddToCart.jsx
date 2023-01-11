import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function AddToCart(props) {
  const [item, setItem] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  let tax = 0.8;
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
            <div className="d-flex">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Small
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Medium
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Large
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary mt-2 w-25"
                onClick={() => setIsVisible(true)}
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {isVisible ? (
            <div className="d-flex flex-column">
              <p>Tax:{tax}</p>
              <p>Total Price:{item * props.price}</p>
              <p></p>
            </div>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToCart;
