import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { Home } from "./Home";
import {AddColor} from "./AddColor";
export default function Routing() {
  return (
    <div>
       <li>
          <Link to="/">home</Link>
          </li>
          <li>  
            <Link to="/counter">counter</Link> 
        </li>
        <li>  
            <Link to="/addcolor">addcolor</Link> 
        </li>
      <Switch>

        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/AddColor">
          <AddColor />
        </Route>
      </Switch>
    </div>
  );
}
