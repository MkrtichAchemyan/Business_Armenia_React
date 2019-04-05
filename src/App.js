import React, { Component } from 'react';
import 'jquery/src/jquery'
import 'bootstrap/dist/js/bootstrap'

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
import BusinessSupportClub from "./components/business_support_club/Business_support_club";
import Events from "./components/events/Events";
import Event from "./components/event/Event";
import Partners from "./components/partners/Partners";
import News from "./components/news/News";
import NewsDetails from "./components/news_details/News_details";
import ScrollToTop from 'react-router-scroll-top'
import CorporateStyle from "./components/corporate_style/Corporate_style";
import Contacts from "./components/contacts/Contacts";

const history = require("history").createBrowserHistory()
class App extends Component {

  render() {
    return (
      <>
      <Router history={history}>
        <ScrollToTop>
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
              <Route exact path='/business-support-club' component={BusinessSupportClub}></Route>
              <Route exact path='/events' component={Events}></Route>
              <Route exact path='/events/:id' component={Event}></Route>
              <Route exact path='/partners' component={Partners}></Route>
              <Route exact path='/news' component={News}></Route>
              <Route exact path='/news/:id' component={NewsDetails}></Route>
              <Route exact path='/corporate-style' component={CorporateStyle}></Route>
              <Route exact path='/contacts' component={Contacts}></Route>
              <Route exact path='*' component={Home}><Redirect to="/"/></Route>
            </Switch>

          <Footer
            history={history}
          />
        </div>
        </ScrollToTop>
      </Router>
      </>
    );
  }
}

export default App;
