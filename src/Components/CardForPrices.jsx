import React, { useState } from "react";
import AddToCart from "./AddToCart";
function CardForPrices({ object }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="card mb-3" style={{ maxWidth: "500px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={object.pic}
            className="img-fluid rounded-start"
            alt="img"
            style={{ height: "200px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{object.title}</h5>
            <p className="card-text">T{object.text}</p>
            <h5>RS:{object.price}</h5>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => setModalShow(true)}
            >
              {object.btnText}
            </button>
            {/* <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p> */}
            {modalShow == true ? (
              <AddToCart
                show={modalShow}
                title={object.title}
                onHide={() => setModalShow(false)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardForPrices;
