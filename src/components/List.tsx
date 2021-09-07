import * as React from "react";
import { useStore } from "../context/storeContext";

function List() {
  const { state, dispatch } = useStore();
  const { patterns } = state;

  return (
    <div className="List">
      <ul>
        {patterns &&
          patterns.map((pattern, index) => (
            <li key={index}>
              <span>{pattern}</span>
              <button
                onClick={() => dispatch({ type: "REMOVE_PATTERN", pattern })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default List;
