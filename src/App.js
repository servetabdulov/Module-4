import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";

import "./reset.css";
import "./common.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
