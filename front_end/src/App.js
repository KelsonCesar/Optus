import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
// import logo from './logo.svg';
// import './App.css';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
</Router>;

export default App;
