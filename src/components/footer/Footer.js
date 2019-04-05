import React, {Component} from 'react'
import logo from '../../assets/images/logo.png'


class Footer extends Component{
  changeUrl = (url)=>{
    this.props.history.push(url)
  };

  render(){
    const href = `javascript:void(0)`
    return(
      <footer className="mainfooter">
        <div className="container">
          <p className="footer-menu1-title">Հղումներ</p>
          <div className="row">
            <div className="col-md-3 footer-menu2">
              <ul>
                <li><a href={href} onClick={()=>{this.changeUrl('/corporate-style')}}>Բրենդ և կորպորատիվ ոճ</a></li>
                <li><a href={href} onClick={()=>{this.changeUrl('/contacts')}}>Կապ</a></li>
              </ul>
            </div>


            <div className=" col-md-3">
              <div className="footer-menu2">
                <ul>
                  <li><a href={href} onClick={()=>{this.changeUrl('/about')}}>Մեր մասին</a></li>
                  <li><a href={href} onClick={()=>{this.changeUrl('/team')}}>Մեր թիմը</a></li>
                  <li><a href={href} onClick={()=>{this.changeUrl('/board')}}>Հոգաբարձուների խորհուրդ</a></li>
                  <li><a href={href} onClick={()=>{this.changeUrl('/corporate')}}>Կորպորատիվ կառավարում</a></li>
                </ul>
              </div>

            </div>

            <div className=" col-md-3">

              <div className="footer-menu3">
                <ul>
                  <li><a href={href} onClick={()=>{this.changeUrl('/news')}}>Նորություններ</a></li>
                  <li><a href={href} onClick={()=>{this.changeUrl('/events')}}>Միջոցառումներ</a></li>
                  <li><a href={href} onClick={()=>{this.changeUrl('/footprint')}}>Մենք աշխարհում</a></li>
                  <li><a href={href} onClick={()=>{this.changeUrl('/vacancy')}}>Աշխատատեղեր</a></li>
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
                <a href={href} target="_blank" rel="noopener noreferrer">example.am</a>
                <a href={href}>test@test.am</a>

              </div>
            </div>

          </div>


          <div className="row">
            <div className="col-xs-12 ">
              <div className="footer-bottom">


                <div className="col-sm-6 footer-bottom-left">
                  <img src={logo} className="img-responsive" alt=''/>
                </div>
                <div className="col-sm-6 footer-bottom-center">
                  <div>
                    <p className="footer-bottom-center-text">Կայքը</p>
                    <a href={href} className="footer-bottom-center-link" rel="noopener noreferrer" target="_blank">
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