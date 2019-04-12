import React, { Component } from 'react'
import {getCorporate} from "../../actions";
import {connect} from "react-redux/src";


class Corporate extends Component{


  componentDidMount() {
    this.props.corporate()

  }

  render(){
    const items = this.props.data;
    const item = items && items.map(item=>
      <div className="row corporate-info-row" key={item.id}>
        <div className="col-md-11 corporate-text-all">
          <div className="corporate-info">
            <p className="corporate-date">Թարմացված է {item.date}</p>
            <p className="corporate-title">{item.title}</p>
          </div>
        </div>

        <div className="col-md-1 corporate-pdf">
          <div className="corporate-pdf-all ">
            <a href={item.src} target="_blank" rel="noopener noreferrer" className="attachmentWrapper">
               <div className="corporate-pdf-icon">
                 <i className="far fa-file-pdf"></i>
               </div>
              <div className="corporate-pdf-text">
                <p className="corporate-pdf-size">{item.size}</p>
              </div>
              <div className="corporate-pdf-arrow">
                <i className="fas fa-arrow-down"></i>
              </div>
            </a>
          </div>

        </div>
      </div>
    )

    return(
      <>
        <div className="all-content">
          <div className="container corporate-all">

            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>ԿՈՐՊՈՐԱՏԻՎ ԿԱՌԱՎԱՐՈՒՄ</p>
                </div>
                <div className="page-description">
                  {item}
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
    data: state.corporate.data
  }
}

const mapDispatchToProps = {
  corporate: getCorporate,
};


export default connect(mapStateToProps,mapDispatchToProps)(Corporate)