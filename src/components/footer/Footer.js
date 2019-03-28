import React, {Component} from 'react'
import logo from '../../assets/images/logo.png'


class Footer extends Component{
  render(){
    return(
      <footer className="mainfooter">
        <div className="container">
          <p className="footer-menu1-title">Հղումներ</p>
          <div className="row">
            <div className="col-md-3 footer-menu2">
              <ul>
                <li><a href="#">Բրենդ և կորպորատիվ ոճ</a></li>
                <li><a href="#">Կապ</a></li>
              </ul>
            </div>


            <div className=" col-md-3">
              <div className="footer-menu2">
                <ul>
                  <li><a href="#">Մեր մասին</a></li>
                  <li><a href="#">Մեր թիմը</a></li>
                  <li><a href="#">Հոգաբարձուների խորհուրդ</a></li>
                  <li><a href="#">Կորպորատիվ կառավարում</a></li>
                </ul>
              </div>

            </div>

            <div className=" col-md-3">

              <div className="footer-menu3">
                <ul>
                  <li><a href="#">Նորություններ</a></li>
                  <li><a href="#">Միջոցառումներ</a></li>
                  <li><a href="#">Մենք աշխարհում</a></li>
                  <li><a href="#">Աշխատատեղեր</a></li>
                </ul>
              </div>

            </div>
            <div className="col-md-3 footer-menu4">


              <div className="footer-contact-div ">
                <p>
                  Մհեր Մկրտչյան,
                  <br/> Երևան, Հայաստան
                  <br/>+374 00 000000
                </p>
                <a href="" target="_blank">example.am</a>
                <a href="#">test@test.am</a>

              </div>
            </div>

          </div>


          <div className="row">
            <div className="col-xs-12 ">
              <div className="footer-bottom">


                <div className="col-sm-6 footer-bottom-left">
                  <img src={logo} className="img-responsive" />
                </div>
                <div className="col-sm-6 footer-bottom-center">
                  <div>
                    <p className="footer-bottom-center-text">Կայքը</p>
                    <a href="#" className="footer-bottom-center-link" target="_blank">
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer