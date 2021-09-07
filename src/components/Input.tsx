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
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pattern}
          onChange={handleChange}
          placeholder="Enter a pattern"
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Input;
