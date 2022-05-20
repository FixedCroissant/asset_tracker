import React, { useState } from "react";

export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
});

function Form(props) {
  const { children ,formInitialValues} = props;
  const [form, setForm] = useState(formInitialValues);

  //Create a change option that can be reused.
  //explicity
  /*const handleFormChange = (event) =>{
        //Clone form 
        const updatedForm = {...form};
        //Get the name of the field that cuased this change event
        //Get the new value of the field. 
        //Assign new value to the appropriate form field. 
        updatedForm[event.target.name] = event.target.value;
        console.log('Form changed: ',updatedForm);

        //SetState
        setForm(updatedForm);
  }*/

  //ES6 converted
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    //Assign new value to the appropriate field
    const updatedForm = {
      ...form,
      [name]: value,
    };
    //Check whats changed
    console.log("Form changed: ", updatedForm);
    //Update the state
    setForm(updatedForm);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        handleFormChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default Form;
