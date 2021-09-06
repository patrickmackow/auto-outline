import * as React from "react";
import { useStore } from "../context/storeContext";

function List() {
  const { state, dispatch } = useStore();
  const { patterns } = state;

  return (
    <div className="List">
      {patterns.length ? (
        <ul>
          {patterns &&
            patterns.map((pattern, index) => (
              <li key={index}>
                <span>{pattern}</span>
                <button
                  onClick={() => dispatch({ type: "REMOVE_PATTERN", pattern })}
                >
                  Remove
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <div>Enter a pattern</div>
      )}
    </div>
  );
}

export default List;
