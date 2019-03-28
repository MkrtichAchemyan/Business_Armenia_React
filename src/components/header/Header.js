import React, { Component } from 'react'
import { Router, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const history = require("history").createBrowserHistory()

class Header extends Component{

  changeUrl = (url)=>{
    this.props.history.push(url)
  };
  count = 0
  show_hide = ()=>{
    if (this.count%2===0){
      document.getElementsByClassName('myNavCont')[0].classList.add('menu-opened')
      document.getElementsByClassName('menu')[0].style.display = 'block'
      this.count++
    }
    else{
      document.getElementsByClassName('myNavCont')[0].classList.remove('menu-opened')
      document.getElementsByClassName('menu')[0].style.display = 'none'
      this.count++
    }
  }

    render(){
      const {navItems} = this.props
      const navLi = navItems.map((item,index) =>{
        return(
          index===0?
            <li key={item.id} className='dropdown'>
                <a onClick={()=>{this.changeUrl('/about')}} className="dropdown-toggle disabled" href="#" data-toggle="dropdown">
                  {item.text}
                  <span className="caret"></span>
                  </a>
                {/*<Link to='/about' href="#" className="dropdown-toggle disabled" href="#" data-toggle="dropdown" style={{ textDecoration: 'none' }}>*/}

                    {/*{item.text}*/}


                {/*</Link>*/}
              <ul id="w6" className="dropdown-menu">
                {item.list.map((item)=>{
                    return(
                      <li key={item.id}>
                          <a onClick={()=>{this.changeUrl('/about')}}>
                           {item.text}
                          </a>
                      </li>
                    )
                }
                )}
              </ul>
            </li>
            :
            <li key={item.id}>
              <a onClick={()=>{this.changeUrl(item.link)}}>
                 {item.text}
                </a>
            </li>
          )
      }
      )
      const navBrand = <img src={logo} width="217" height="72" alt="" />
        return(
            <>
              <div className="myNavCont">
                <div className="myNav-container">
                  <div id="myNav" onClick={this.show_hide.bind(false)}>
                    <div className="bar topBar"></div>
                    <div className="bar btmBar"></div>
                  </div>
                </div>

                <ul className="menu">
                  <li className="menu-item"><a className="disabled" onClick={()=>{this.changeUrl('/about')}}>Մեր մասին</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Հայաստանի մասին</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Հոգաբարձուների խորհուրդ</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Մեր թիմը</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Կորպորատիվ կառավարում</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Մենք աշխարհում</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Գործարարների աջակցության ակումբ</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Միջոցառումներ</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Նորություններ</a></li>
                  <li className="menu-item"><a onClick={()=>{this.changeUrl('/about')}}>Գործընկերներ</a></li>
                  <li className="mobile-language-switcher">
                    <div className="btn-group">
                      <button id="w0" className="btn dropdown-toggle" data-toggle="dropdown">ARM <span
                        className="caret"></span>
                      </button>

                      <ul id="w1" className="dropdown-menu">
                        <li><a href="#" tabIndex="-1">ENG</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>




              <div className="header-menu">
                <nav id="w2" className="navbar-inverse navbar">
                  <div className="container">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#w2-collapse"><span
                        className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a onClick={()=>{this.changeUrl('/')}}>
                            {navBrand}
                        </a>
                    </div>
                    <div id="w2-collapse" className="collapse navbar-collapse">
                      <ul id="w5" className="navbar-nav navbar-right nav">
                          {navLi}
                        <li>
                          <a href="#">
                            <i className="fas fa-search"></i>
                          </a>
                        </li>
                        <li>
                          <div className="btn-group">
                            <button id="w3" className="btn dropdown-toggle disabled" data-toggle="dropdown">
                              ARM
                              <span className="caret"></span></button>
                            <ul id="w4" className="dropdown-menu">
                              <li>
                                <a href="#" tabIndex="-1">ENG</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-arrow">
                            <svg className="svg-inline--fa fa-angle-down fa-w-10" aria-hidden="true" data-prefix="fas"
                                 data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 320 512" data-fa-i2svg="">
                              <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                            </svg>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </>
        )
    }
}

export default Header