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
  // const onChange = (e) => {
  //   setEmail(e.target.value);
  // };
  console.log(email);
  console.log(password);
  return (
    <>
      <div className="img">
        <div className="card w-50 m-auto h-50 ">
          <div className="card-body pt-4">
            <h1 className="card-title text-center">Login</h1>
            <p className="card-text">
              Welcome Back! Register Your account and buy products in cheap
              prices.
            </p>
            <div className="mb-3 row">
              <Input
                Label="Email"
                InputType="text"
                inputValue={email}
                setInputValue={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 row">
              <Input
                Label="Password"
                InputType="password"
                inputValue={password}
                setInputValue={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end">
              <Link to={"/Register"}>Don't have an account</Link>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/")}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary"
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
