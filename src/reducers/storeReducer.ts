type State = {
  urls: string[];
};

type Action =
  | { type: "INIT"; state: State }
  | { type: "ADD_URL"; url: string }
  | { type: "REMOVE_URL"; url: string };

function storeReducer(state: State, action: Action) {
  console.log(action.type);

  switch (action.type) {
    case "INIT":
      return action.state;
    case "ADD_URL":
      return { ...state, urls: [...state.urls, action.url] };
    case "REMOVE_URL":
      return { ...state, urls: state.urls.filter((url) => url !== action.url) };
    default:
      throw new Error("Invalid action type");
  }
}

export { storeReducer, State, Action };
