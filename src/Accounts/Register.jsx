import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import Input from "../Components/Input";
import "./Account.css";
function Register() {
  const naviagte = useNavigate();
  return (
    <>
      <div className="container1">
        <div class="card w-50  m-auto h-100">
          <div class="card-body">
            <h1 class="card-title text-center">Register</h1>
            <p class="card-text">
              Welcome Back! Enter your registered account.
            </p>
            <div class="mb-3 row">
              <Input Label="UserName" InputType="text" />
            </div>
            <div class="mb-3 row">
              <Input Label="Email" InputType="text" />
            </div>
            <div class="mb-3 row">
              <Input Label="Password" InputType="text" />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-between">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => naviagte("/Login")}
              >
                Register
              </button>
              <button
                type="button"
                class="btn btn-primary"
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
