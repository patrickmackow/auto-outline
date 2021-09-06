type State = {
  patterns: string[];
};

type Action =
  | { type: "INIT"; state: State }
  | { type: "ADD_PATTERN"; pattern: string }
  | { type: "REMOVE_PATTERN"; pattern: string };

function storeReducer(state: State, action: Action) {
  switch (action.type) {
    case "INIT":
      return action.state;
    case "ADD_PATTERN":
      return { ...state, patterns: [action.pattern, ...state.patterns] };
    case "REMOVE_PATTERN":
      return {
        ...state,
        patterns: state.patterns.filter(
          (pattern) => pattern !== action.pattern
        ),
      };
    default:
      throw new Error("Invalid action type");
  }
}

export { storeReducer, State, Action };
