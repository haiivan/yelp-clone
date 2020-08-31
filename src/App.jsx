import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import Restaurant from "./routes/Restaurant";
import Update from "./routes/Update";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:id" component={Restaurant} />
          <Route exact path="/restaurants/:id/update" component={Update} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;