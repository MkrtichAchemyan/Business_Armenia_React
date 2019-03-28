import React, { Component} from 'react'

class Social_bar extends Component{
  render(){
    const {social_items} = this.props
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