import "../Form.css";

import {FormContext} from "./Form";

import React, { useState, useContext } from "react";




function FormInput(props) {

const formContext = useContext(FormContext);
const {form, handleFormChange } = formContext;

  //Set default to text
  const { label, 
    type = "text", 
    name,
} = props;

return (
    <div className="FormInput">
      <label>{label}</label>
      <input type={type} 
      name={name} 
      value={form[name]} 
      onChange={handleFormChange} />
    </div>
  );
}

export default FormInput;
