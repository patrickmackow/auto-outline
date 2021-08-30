import * as React from "react";
import { useStore } from "../context/storeContext";

function List() {
  const { state, dispatch } = useStore();
  const { urls } = state;

  return (
    <ul>
      {urls &&
        urls.map((url, index) => (
          <li key={index}>
            {url}
            <button onClick={() => dispatch({ type: "REMOVE_URL", url: url })}>
              Remove
            </button>
          </li>
        ))}
    </ul>
  );
}

export default List;
