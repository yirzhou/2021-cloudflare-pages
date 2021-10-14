import React from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts/Posts";
import Write from "./components/Write/Write";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/posts" exact component={Posts} />
          <Route path="/write" exact component={Write} />

          {/* <Route component={Error} /> */}
        </Switch>
      </header>
    </div>
  );
}

export default App;
