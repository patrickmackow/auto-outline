import * as React from "react";
import { List } from "./components/List";

function App() {
  const [urls, setUrls] = React.useState(["reddit.com", "medium.com"]);
  const [url, setUrl] = React.useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUrl(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!url.length) {
      return;
    }

    setUrls([...urls, url]);
    setUrl("");
  }

  return (
    <div>
      <h1>Auto Outline</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <List urls={urls} />
    </div>
  );
}

export { App };
