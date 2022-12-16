import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import "./Account.css";
function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();
  return (
    <>
      <div className="img">
        <div className="card w-50  m-auto h-50">
          <div className="card-body">
            <h1 className="card-title text-center">Register</h1>
            <p className="card-text">
              Welcome Back! Enter your registered account.
            </p>
            <div className="mb-3 row">
              <Input
                Label="UserName"
                InputType="text"
                inputValue={userName}
                setInputValue={(e) => setUserName(e.target.value)}
              />
            </div>
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
                InputType="text"
                inputValue={password}
                setInputValue={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-between">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => naviagte("/Login")}
              >
                Register
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => naviagte("/Login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
