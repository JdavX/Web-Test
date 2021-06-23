import React from "react";
import Nav from "./components/Nav";
import SignUp from "./components/Sign_Up";
import Login from "./components/Login";
import Home from "./components/Home";
import "./css/signup.css";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>  
      <Route path="/" exact component={Home}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <Route path="/contacts" component={Contact}/>
    </Switch>
    </div> 
    </Router>
  );
}

export default App;
