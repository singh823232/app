// import logo from './logo.svg';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Registration from './Registration';
import Login from './Login';
import Otpverify from './Otpverify';
import Resetpass from './Resetpass';

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/otpverify" component={Otpverify} />
        <Route exact path="/resetpass" component={Resetpass} />
        <Redirect to="/" />
      </Switch>


    </>
  )
}

export default App

