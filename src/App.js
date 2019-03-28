import React, { Component } from 'react';
import { Redirect , Router, Route, Switch } from "react-router-dom";
import './App.css';
import fb from './assets/images/fb.svg'
import li from './assets/images/li.svg'
import mail from './assets/images/mail.svg'
import tel from './assets/images/tel.svg'
import you from './assets/images/you.svg'
import SocialBar from "./components/social_bar/Social_bar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";

const history = require("history").createBrowserHistory()
class App extends Component {
  state = {
    navItems: [
      {
        id: 1,
        text: 'Մեր մասին',
        link:'/about',
        list: [
          {
            id: 1.1,
            text: 'Ո՞վ ենք մենք',
          },
          {
            id: 1.2,
            text: 'Մեր թիմը',
          },
          {
            id: 1.3,
            text: 'Հայաստանի մասին',
          },
          {
            id: 1.4,
            text: 'Հոգաբարձուների խորհուրդ',
          },
          {
            id: 1.5,
            text: 'Կորպորատիվ կառավարում',
          }
        ]
      },
      {
        id: 2,
        text: 'Մենք աշխարհում',
        link:'/about',
      },
      {
        id: 3,
        text: 'Գործարարների աջակցության ակումբ',
        link:'/about',
      },
      {
        id: 4,
        text: 'Միջոցառումներ',
        link:'/about',
      },
      {
        id: 5,
        text: 'Նորություններ',
        link:'/about',
      },
      {
        id: 6,
        text: 'Գործընկերներ',
        link:'/about',
      },
    ],
    social_items:[
      {
        id:"fb-icon",
        src:fb
      },
      {
        id:"li-icon",
        src:li
      },
      {
        id:"mail-icon",
        src:mail
      },
      {
        id:"tel-icon",
        src:tel
      },
      {
        id:"you-icon",
        src:you
      }
    ],
  }

  render() {
    const {navItems} = this.state
    const {social_items} = this.state
    return (
      <>
      <Router history={history}>
        <div className="">
          <SocialBar
            social_items={social_items}
          />
          <Header
            navItems={navItems}
            history={history}
          />

            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
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
