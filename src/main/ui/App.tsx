import React from 'react';
import './App.css';
import {Main} from "./main/Main";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../bll/store";

function App() {
  return (
    <div className={"app"}>
      <Provider store={store}>
        <HashRouter>
          <Main/>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
