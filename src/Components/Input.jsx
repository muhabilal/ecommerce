import React from "react";

function Input(props) {
  return (
    <>
      <label class="col-sm-2 col-form-label">{props.Label}</label>
      <div class="col-sm-10">
        <input type={props.InputType} class="form-control" />
      </div>
    </>
  );
}

export default Input;