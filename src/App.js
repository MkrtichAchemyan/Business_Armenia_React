import React, { Component } from 'react';

import { Redirect , Router, Route, Switch } from "react-router-dom";
import './App.css';
import SocialBar from "./components/social_bar/Social_bar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Board from "./components/board/Board";
import Team from "./components/team/Team";
import AboutArmenia from "./components/about_armenia/About_armenia";
import Corporate from "./components/corporate/Corporate";
import Footprint from "./components/footprint/Footprint";
import FootprintItem from "./components/footprint_item/Footprint_item";

const history = require("history").createBrowserHistory()
class App extends Component {


  render() {
    return (
      <>
      <Router history={history}>
        <div className="">
          <SocialBar/>
          <Header
            history={history}
          />

            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/board' component={Board}></Route>
              <Route exact path='/team' component={Team}></Route>
              <Route exact path='/about-armenia' component={AboutArmenia}></Route>
              <Route exact path='/corporate' component={Corporate}></Route>
              <Route exact path='/footprint' component={Footprint}></Route>
              <Route exact path='/footprint/:id' component={FootprintItem}></Route>
              <Route exact path='*' component={Home}><Redirect to="/"/></Route>
            </Switch>

          <Footer/>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
