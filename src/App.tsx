import React, { useState } from "react";

import "./App.css";
import Title from "./components/Title";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import useStore from "./store";

function App() {
  const [open, set] = useState(true);
  // const [click, setClick] = useState(true);
  const bears = useStore((state) => state.page);
  const bears2 = useStore((state) => state.click);
  const click = useStore((state) => state.click);
  console.log(bears2);

  return (
    <div className="App">
      <Title open={open} pos={click}>
        <span style={{ fontSize: "5em" }}>Portfolio</span>
        <span style={{ fontSize: "1em", textAlign: "right", display: "block" }}>
          Front-end developer {bears}
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
