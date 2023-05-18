import React, { useState } from "react";

export default function FormTemp1(props) {
  const [submitLocation, setLocation] = useState(props.location);

  function handleSubmit(e) {
    e.preventDefault();
    const location = submitLocation;
    alert(location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="todo-label" htmlFor={props.id}>
        State:
      </label>

      <button type="submit" className="btn btn__primary btn__lg">
        Save
      </button>
    </form>
  );
}
