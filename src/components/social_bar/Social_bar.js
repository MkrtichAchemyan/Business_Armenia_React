import React, { Component} from 'react'
import fb from "../../assets/images/fb.svg";
import li from "../../assets/images/li.svg";
import mail from "../../assets/images/mail.svg";
import tel from "../../assets/images/tel.svg";
import you from "../../assets/images/you.svg";

class Social_bar extends Component{

  state={
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

  render(){
    const {social_items} = this.state
    const social_item = social_items.map(item=>
      <a href="#" key={item.id} target="_blank">
        <img id={item.id} src={item.src} alt=''/>
      </a>
    )
    return(
      <>
        <div id="contatc-us-bar">
          <div id="contact-us-bar-icons" className="hide-contact">
            {social_item}
          </div>
        </div>
      </>
    )
  }
}

export default Social_bar