import React from "react";
import CenterModal from "./CenterModal";
function Card(props) {
  const header = props.title;
  const text = props.btnText;
  const text1 = props.btntext;
  const [modalShow, setModalShow] = React.useState(false);
  console.log("modal is", modalShow);
  return (
    <div class="card w-50  m-auto h-100">
      <div class="card-body">
        <h1 class="card-title text-center">{header}</h1>
        <p class="card-text">
          Welcome Back! Register Your account and buy products in cheap prices.
        </p>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Username
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              // id="staticEmail"
              // value="email@example.com"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              // value="email@example.com"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-between">
          <button type="button" class="btn btn-primary">
            {text}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() =>
              text1 == "Forget Passcode" ? setModalShow(true) : false
            }
          >
            {text1}
          </button>
          {modalShow == true ? (
            <CenterModal
              show={modalShow}
              title="Welcome!"
              header="Recover Passcode"
              onHide={() => setModalShow(false)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
