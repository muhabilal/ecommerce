import React from "react";

function Input(props) {
  return (
    <>
      <label className="col-sm-2 col-form-label">{props.Label}</label>
      <div className="col-sm-10">
        <input
          type={props.InputType}
          className="form-control"
          value={props.inputValue}
          onChange={props.setInputValue}
        />
      </div>
    </>
  );
}

export default Input;
