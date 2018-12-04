import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Subways from "./components/subways/Subways";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Subway Status" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Subways} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
