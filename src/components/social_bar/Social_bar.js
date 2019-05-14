import React, { Component} from 'react'
import {getSocialBar} from "../../actions";
import {connect} from "react-redux/src";

class Social_bar extends Component{

  componentDidMount() {
    this.props.social_bar()
  }

  render(){
    const social_items = this.props.data
    const href = `javascript:void(0)`
    const social_item = social_items.map(item=>
      <a href={href} key={item.id} target="_blank"  rel="noopener noreferrer">
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

const mapStateToProps = (state)=>{
  return {
    data: state.social_bar.data
  }
}



const mapDispatchToProps = {
  social_bar: getSocialBar,
};


export default connect(mapStateToProps,mapDispatchToProps)(Social_bar)