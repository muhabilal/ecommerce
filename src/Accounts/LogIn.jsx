import React, { useState } from "react";
import CenterModal from "../Components/CenterModal";
import Input from "../Components/Input";
import { Link, useNavigate } from "react-router-dom";
import "./Account.css";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  console.log("modal is", modalShow);
  const navigate = useNavigate();
  return (
    <>
      <div className="container1">
        <div class="card w-50  m-auto h-100">
          <div class="card-body">
            <h1 class="card-title text-center">Login</h1>
            <p class="card-text">
              Welcome Back! Register Your account and buy products in cheap
              prices.
            </p>
            <div class="mb-3 row">
              <Input Label="Email" InputType="text" />
            </div>
            <div class="mb-3 row">
              <Input Label="Password" InputType="password" />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-md-end">
              <Link to={"/Register"}>Don't have an account</Link>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-between">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => navigate("/")}
              >
                Login
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => setModalShow(true)}
              >
                Forget
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
      </div>
    </>
  );
}

export default LogIn;
