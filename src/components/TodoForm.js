import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input placeholder="Update your Item" value={input} name="text" className="todo-input edit" onChange={handleChange} ref={inputRef} />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
          <button className="todo-button">Tambahkan</button>)
        </>
      )}
    </form>
  );
}

export default TodoForm;
