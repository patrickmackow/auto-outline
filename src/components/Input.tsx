import * as React from "react";
import { useStore } from "../context/storeContext";

function Input() {
  const [pattern, setPattern] = React.useState("");
  const { dispatch } = useStore();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPattern(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!pattern.length) {
      return;
    }

    dispatch({ type: "ADD_PATTERN", pattern });
    setPattern("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={pattern} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default Input;
