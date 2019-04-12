import React, { Component} from 'react'
import {getPartners} from "../../actions";
import {connect} from "react-redux/src";

class Partners extends Component{

  componentDidMount() {
    this.props.partners()
  }

  render(){

    const armenian_partners = this.props.data[0]?this.props.data[0].armenian_partners:[];
    const international_partners = this.props.data[0]?this.props.data[0].international_partners:[];

    const armenianPartners = armenian_partners.map(item=>
      <div key={item.id} className="col-xs-6 col-md-2">
        <div className="home-partner">
          <a href={'http://www.gov.am/am/'} rel="noopener noreferrer" target="_blank">
            <img src={item.src} alt='' className="img-responsive" />
          </a>
        </div>
      </div>
    )
    const internationalPartners = international_partners.map(item=>
      <div key={item.id} className="col-xs-6 col-md-2">
        <div className="home-partner">
          <a href={'http://www.gov.am/am/'} rel="noopener noreferrer" target="_blank">
            <img src={item.src} alt='' className="img-responsive" />
          </a>
        </div>
      </div>
    )
    return(
      <>
        <div className="all-content">
          <div className="container partner-container">
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>Հայաստանյան գործընկերներ</p>
                </div>
                <div className="page-description">
                  <div className="row">
                    {armenianPartners}
                  </div>

                  <div className="row">
                    <div className="col-xs-12">
                      <div className="home-partner-title-div">
                        <p className="home-partner-title">Միջազգային գործընկերներ</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {internationalPartners}
                  </div>
                </div>
              </div>
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
    data: state.partners.data
  }
}



const mapDispatchToProps = {
  partners: getPartners,
};


export default connect(mapStateToProps,mapDispatchToProps)(Partners)