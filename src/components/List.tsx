import * as React from "react";

function List({ urls }: { urls?: string[] }) {
  return (
    <ul>{urls && urls.map((url, index) => <li key={index}>{url}</li>)}</ul>
  );
}

export { List };
