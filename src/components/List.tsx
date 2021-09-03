import * as React from "react";
import { useStore } from "../context/storeContext";

function List() {
  const { state, dispatch } = useStore();
  const { patterns } = state;

  return (
    <ul>
      {patterns &&
        patterns.map((pattern, index) => (
          <li key={index}>
            {pattern}
            <button
              onClick={() => dispatch({ type: "REMOVE_PATTERN", pattern })}
            >
              Remove
            </button>
          </li>
        ))}
    </ul>
  );
}

export default List;
