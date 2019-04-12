import React, { Component } from 'react'

import papazyan from "../../assets/images/david-papazyan.jpg"
import {getTeam} from "../../actions";
import {connect} from "react-redux/src";


class Team extends Component{

  componentDidMount() {
    this.props.team()
  }

  render(){
    const persons = this.props.data;
    const href = `javascript:void(0)`
    const person = persons.map(person=>
      <div className="col-xs-12 col-sm-6 col-md-4 team-all-col" key={person.id}>
        <div className="team-all">
          <div className="team-all-img">
            <img src={person.img} className="img-responsive" alt=''/>
          </div>
          <div className="team-all-text">
            <h3>{person.fullName}</h3>
            <p>{person.position}</p>
            <a href={href}
               className="team-all-text-link">
              {person.email}
            </a>
          </div>
        </div>
      </div>
    )

    return(
      <>
        <div className="all-content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>Մեր թիմը</p>
                </div>
                <p className="page-description">
                  Բիզնես Արմենիայի թիմը բաղկացած է նպատակասլաց, փորձառու և բարձր որակավորում ունեցող մասնագետներից,
                  որոնք, կրթություն ստանալով օտարերկրյա և հայաստանյան առաջատար բարձրագույն ուսումնական
                  հաստատություններում, իրենց գիտելիքներն ու փորձը ծառայեցնում են կառույցի հիմնական առաքելության
                  իրականացմանը։ </p>
              </div>
            </div>
            <div className="row team-members-wrapper">
              <div className="col-xs-12 col-sm-6 col-md-4 team-all-col">
                <div className="team-all">
                  <div className="team-all-img">
                    <img src={papazyan} className="img-responsive" alt=''/>
                  </div>
                  <div className="team-all-text">
                    <h3>Դավիթ Փափազյան</h3>
                    <p>Գործադիր տնօրեն</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row team-members-wrapper">
              {person}
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
    data: state.team.data
  }
}



const mapDispatchToProps = {
  team: getTeam,
};


export default connect(mapStateToProps,mapDispatchToProps)(Team)