import React, { Component } from 'react'
import {getFootprint} from "../../actions";
import {connect} from "react-redux/src";


class FootprintItem extends Component{

  componentDidMount() {
    this.props.footprint()
  }

  componentWillReceiveProps(nextProps){

    let obj = nextProps.data.find(per=>per.id === +this.props.match.params.id)
    if(!obj){
      this.props.history.push('/footprint')
    }
  }

  render(){
    const history_id = this.props.match.params.id;
    const href = `javascript:void(0)`
    const persons = this.props.data
    let person = persons.map((person)=>{

        return person.id === +history_id && <div className="row legal-row" style={{backgroundImage:`url(${person.map})`}} key={person.id}>
            <div className="row">
              <div className="col-xs-12">
                <div className="footprint-maintitle-div">

                  <p className="footprint-maintitle-text">
                    <span className="footprint-maintitle-text-right">
                      <img className="footprint-flag" src={person.flag} alt="" />
                      {person.country}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 team-all-col">

              <div className="team-all representative-single">
                <div className="team-all-img">
                  <img src={person.img} className="img-responsive rep-image" alt=''/>
                </div>

                <div className="team-all-text">
                        <span>
                          <h3>{person.fullName}</h3>
                          <a href={href}>{person.email}</a>
                        </span>
                </div>
              </div>
            </div>
            <div className="col-sm-8 team-all-col">
              <p className="page-description" style={{marginTop:0}}>
                {person.text}
              </p>
            </div>
          </div>
    })
    return(
      <>
        <div className="all-content">
          <div className="container corporate-all">
            {person}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    data: state.footprint.data
  }
}



const mapDispatchToProps = {
  footprint: getFootprint,
};


export default connect(mapStateToProps,mapDispatchToProps)(FootprintItem)