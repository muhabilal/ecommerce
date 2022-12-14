import React, { useState } from "react";

import "./Account.css";
import Card from "../Components/Card";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="container1">
        <Card title="Login" btnText="Login" btntext="Forget Passcode" />
      </div>
    </>
  );
}

export default LogIn;
