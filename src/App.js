import React, { Component } from "react";

import Navbar from "./Dashboard/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Dashboard/Components/Home";
import Footer from "./Dashboard/Components/Footer";
import About from "./Dashboard/Components/About";

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <div id="app">
          <div className="container">
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
