import * as React from "react";
import { useStore } from "../context/storeContext";

function Input() {
  const [url, setUrl] = React.useState("");
  const { dispatch } = useStore();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUrl(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!url.length) {
      return;
    }

    dispatch({ type: "ADD_URL", url });
    setUrl("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={url} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default Input;
