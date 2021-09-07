import * as React from "react";
import matcher from "../utils/matcher";

function MatchTooltip({ pattern, url }: { pattern: string; url: string }) {
  if (!pattern.length) {
    return <div className="MatchTooltip empty"></div>;
  }
  if (matcher(pattern, url)) {
    return (
      <div className="MatchTooltip success">Pattern matches current url</div>
    );
  } else {
    return (
      <div className="MatchTooltip failure">
        Pattern does not match current url
      </div>
    );
  }
}

export default MatchTooltip;
