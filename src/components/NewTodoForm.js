import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    addTodo({ task, id: uuid() });
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
