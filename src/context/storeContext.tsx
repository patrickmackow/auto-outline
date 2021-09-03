import * as React from "react";
import * as browser from "webextension-polyfill";
import { storeReducer, State, Action } from "../reducers/storeReducer";

type Store = {
  state: { patterns: string[] };
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  patterns: [],
};

const StoreContext = React.createContext<Store | null>(null);

function StoreProvider(props: any) {
  const [state, dispatch] = React.useReducer(storeReducer, initialState);
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    browser.storage.local.get().then((data) => {
      dispatch({
        type: "INIT",
        state: { patterns: data.patterns ?? initialState.patterns },
      });
      setStatus("success");
    });
    setStatus("loading");
  }, []);

  React.useEffect(() => {
    if (status !== "success") return;
    browser.storage.local.set(state);
  }, [state]);

  return <StoreContext.Provider value={{ state, dispatch }} {...props} />;
}

function useStore() {
  const context = React.useContext(StoreContext);
  if (context === null) {
    throw new Error("useStore must be used in a StoreProvider");
  }
  return context;
}

export { Store, StoreProvider, useStore };
