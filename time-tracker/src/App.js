import React from 'react';
import SimpleCounter from "./Components/SimpleCounter"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

        <Header />

        <SimpleCounter />

          <Switch>
            <Route exact path="/">
              <h1 className="font-bold text-2xl">Home</h1>
            </Route>
            <Route path="/about">
              <h1 className="font-bold text-2xl">About us</h1>
            </Route>
          </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
