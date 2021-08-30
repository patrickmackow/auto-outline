import * as React from "react";
import Input from "./components/Input";
import List from "./components/List";
import { StoreProvider } from "./context/storeContext";

function App() {
  return (
    <StoreProvider>
      <div>
        <h1>Auto Outline</h1>
        <Input />
        <List />
      </div>
    </StoreProvider>
  );
}

export { App };
