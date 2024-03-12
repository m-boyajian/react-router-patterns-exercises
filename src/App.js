import React from "react";
import dogsData from './dogsData';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogsData} /> 
          </Route>
          <Route path="/dogs/:name" render={(props) => <DogDetails dogs={dogsData} {...props} />} />
          <Redirect to="/dogs" />
        </Switch>
        <Nav dogs={dogsData} />
      </div>
    </BrowserRouter>
  );
}

export default App;

