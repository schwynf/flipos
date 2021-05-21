import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./Pages/Signup";
import Checkbox from "./Pages/Checkbox";
import ColorPicker from "./Pages/ColorPicker";
import Refractor from "./Pages/Refractor";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/checkbox" component={Checkbox} />
          <Route exact path="/colorpicker" component={ColorPicker} />
          <Route exact path="/refractor" component={Refractor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;