import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div className={"app"}>
      <HashRouter>
        <Main/>
      </HashRouter>
    </div>
  );
}

export default App;
