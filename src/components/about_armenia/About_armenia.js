import React, { Component } from 'react'
import {connect} from "react-redux/src";
import {getAboutArmenia} from "../../actions/index"


class AboutArmenia extends Component{

  componentDidMount() {
      this.props.aboutArmenia()
  }

  render(){
    const items = this.props.data;
    const href = `javascript:void(0)`;
    const item = items && items.map(item=>

      <div className="col-sm-4 team-all-col" style={{marginTop:0}} key={item.id}>
        <div className="event-content" style={{marginTop:0}}>
          <a href={href} className="corporate-style-pdf attachmentWrapper">
            <div className="team-all-img brandbook-single-img sectorial-img">
              <img src={item.img} className="img-responsive" alt=''/>
            </div>
            <div className="event-read-more sectorials-read-more">
              <p>Ավելին...</p>
            </div>
          </a>
        </div>
      </div>
    )

    return(
      <>
        <div className="all-content">
          <div className="container corporate-all">
            <div className="row ">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>Հայաստանի մասին</p>
                </div>
                <div className="page-description">
                </div>
              </div>
            </div>
            <div className="page-description sectorials-page row">
              {item}
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state)=>{
    console.log(state);
  return {
    data: state.about_armenia.data
  }
}

const mapDispatchToProps = {
  aboutArmenia: getAboutArmenia,
};

export default connect(mapStateToProps,mapDispatchToProps)(AboutArmenia)