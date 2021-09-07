import * as React from "react";
import Input from "./components/Input";
import List from "./components/List";
import { StoreProvider } from "./context/storeContext";
import "./App.scss";
import "@fontsource/roboto/400.css";
import "@fontsource/open-sans/400.css";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h1>Auto Outline</h1>
        <Input />
        <List />
      </div>
    </StoreProvider>
  );
}

export { App };
