import React from "react";
import Vote from "./components/Vote";
import LifeCycleTrackFC from "./components/LifeCycleTrackFC";
import LifeCycleTrackCC from "./components/LifeCycleTrackCC";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Component Lifecycle</h1>
      <hr />
      <div className="item">
        <h3>Vote</h3>
        <Vote />
        <hr />
      </div>
      <div className="item">
        <h3>LifeCycleTrack in FC</h3>
        <LifeCycleTrackFC />
        <hr />
      </div>
      <div className="item">
        <h3>LifeCycleTrack in CC</h3>
        <LifeCycleTrackCC />
        <hr />
      </div>
    </div>
  );
}
