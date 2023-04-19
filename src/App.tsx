import React, { useState } from "react";

import "./App.css";
import Title from "./components/Title";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";

function App() {
  const [open, set] = useState(true);
  const [click, setClick] = useState(true);
  return (
    <div className="App">
      <Title open={open} pos={click}>
        <span style={{ fontSize: "6em" }}>Bitroid</span>
        <span style={{ fontSize: "2em", textAlign: "right", display: "block" }}>
          Description
        </span>
      </Title>

      <Info />
      <Portfolio />
      {/* <button onClick={() => set(!open)}>TITLE</button>
      <button onClick={() => setClick(!click)}>CLICK</button> */}
    </div>
  );
}

export default App;
