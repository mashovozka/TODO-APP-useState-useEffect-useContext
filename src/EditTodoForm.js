import React from "react";
import useInputState from "./hooks/useInputState"
import TextField from "@material-ui/core/TextField";

function EditTodoForm({task, editTodo, id, toggle}){
    const [value, handleChange, reset] = useInputState(task)
return (
      <form onSubmit={e => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggle();
      }}
      style={{marginLeft: "1rem", width: "100%"}}
      >
      <TextField
      margin="normal"
      value={value}
      onChange={handleChange}
      fullWidth
      autoFocus
      />
    </form>
)
}
export default EditTodoForm;