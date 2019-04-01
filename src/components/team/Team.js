import React, { Component } from 'react'
import avinyan from '../../assets/images/artak-poghosyan.jpg'
import papazyan from "../../assets/images/david-papazyan.jpg"


class Team extends Component{
  state={
    persons:[
      {
        id:1,
        fullName:"ԱՐՏԱԿ ՊՈՂՈՍՅԱՆ",
        position:"Ֆինանսատնտեսական և իրավաբանական խմբի տնօրեն",
        img:avinyan,
        email: 'example@gmail.com'
      },
      {
        id:2,
        fullName:"ԱՐՏԱԿ ՊՈՂՈՍՅԱՆ",
        position:"Ֆինանսատնտեսական և իրավաբանական խմբի տնօրեն",
        img:avinyan,
        email: 'example@gmail.com'
      },
      {
        id:3,
        fullName:"ԱՐՏԱԿ ՊՈՂՈՍՅԱՆ",
        position:"Ֆինանսատնտեսական և իրավաբանական խմբի տնօրեն",
        img:avinyan,
        email: 'example@gmail.com'
      },
      {
        id:4,
        fullName:"ԱՐՏԱԿ ՊՈՂՈՍՅԱՆ",
        position:"Ֆինանսատնտեսական և իրավաբանական խմբի տնօրեն",
        img:avinyan,
        email: 'example@gmail.com'
      },
      {
        id:5,
        fullName:"ԱՐՏԱԿ ՊՈՂՈՍՅԱՆ",
        position:"Ֆինանսատնտեսական և իրավաբանական խմբի տնօրեն",
        img:avinyan,
        email: 'example@gmail.com'
      }
    ]
  }
  render(){
    const {persons} = this.state;
    const person = persons.map(person=>
      <div className="col-xs-12 col-sm-6 col-md-4 team-all-col" key={person.id}>
        <div className="team-all">
          <div className="team-all-img">
            <img src={person.img} className="img-responsive" alt=''/>
          </div>
          <div className="team-all-text">
            <h3>{person.fullName}</h3>
            <p>{person.position}</p>
            <a href="#"
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
                    <img src={papazyan} className="img-responsive" />
                  </div>
                  <div className="team-all-text">
                    <h3>Դավիթ Փափազյան</h3>
                    <p>Գործադիր տնօրեն</p>
                    <a href="#" className="team-all-text-link"></a>
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

export default Team