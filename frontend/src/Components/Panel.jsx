import React from "react";

import "./css/Panel.css";

function Panel({Title}) {
  return (
    <div className="Panel">
      <h1>{Title}</h1>
      <p>Home/ {Title}</p>
    </div>
  );
}

export default Panel;
