import React, { useState } from "react";

export default function FormTemp(props) {
  const [state, setState] = useState(props.Name);
  const [edit, setEdit] = useState(false);

  function handleChange(e) {
    setState(e.target.value);
  }

  function handleSubmit(e) {
        e.preventDefault();
       alert("Update Information")
       //Send data
       fetch(process.env.REACT_APP_API_URL + `/update`, {
        method: "POST",
        body: JSON.stringify({'id':1,'Name':state,'Population':parseInt("123456")})
      })
        .then(res => res.json())
        .then(data => {
          //Put this in a nice little place.
          console.log(data)
        })
        .catch(error => {
          console.error("Error:", error);
        });
  }

  function handleClick(e) {
    //alert("yay click");
    //Working
    setEdit({ edit: true });
  }

  return (
    <form onSubmit={handleSubmit}>
        <li className="todo stack-small">
            <div className="c-cb">
            <label className="todo-label" htmlFor={props.id}>
                State:
            </label>
            {edit ? (
                <input
                required
                type="text"
                placeholder="Enter State Title"
                value={state}
                onChange={handleChange}
                />
            ) : (
                props.Name
            )}
            </div>
            <div className="btn-group">
            <button type="button" className="btn" onClick={handleClick}>
                Edit
            </button>
            <button type="submit" className="btn btn__primary btn__lg">
                 Save
            </button>
            </div>
        </li>
    </form>
  );
}
