import React, { Component } from 'react'
import russiaMap from '../../assets/images/russiaLow.svg'
import emirats from '../../assets/images/unitedArabEmiratesLow.svg'
import usa from '../../assets/images/usaLow.svg'
import aharon_papoyan from '../../assets/images/aharon-papoyan.jpg'
import petros_karapetyan from '../../assets/images/petros-karapetyan.jpg'
import paruyr_sarkisyan from '../../assets/images/paruyr-sarkisyan.jpg'


class FootprintItem extends Component{
  state={
    persons:[
      {
        id:1,
        fullName:"ԱՀԱՐՈՆ ՊԱՊՈՅԱՆ",
        country:"ՌՈՒՍԱՍՏԱՆ",
        img:aharon_papoyan,
        flag: 'https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg',
        map:russiaMap,
        email:'aharon.papoyan@businessarmenia.am',
        text:"Ահարոն Պապոյանը Investment Banking-ի հաջողակ մասնագետ է, «ATON» ընկերության բաժնետեր, կորպորատիվ ֆինանսների վարչության ղեկավար։ Հայաստանում ներդրումային ծրագրերի մեծ փորձ ունի։"
      },
      {
        id:26,
        fullName:"ՊԵՏՐՈՍ ԿԱՐԱՊԵՏՅԱՆ",
        country:"ԱՄԷ",
        img:petros_karapetyan,
        flag: 'https://lipis.github.io/flag-icon-css/flags/4x3/ae.svg',
        map:emirats,
        email:'petros.karapetyan@businessarmenia.am',
        text:"Պետրոս Կարապետյանը «Zilli» ՍՊԸ-ի հիմնադիրն է, Հայաստանում ԱՄՆ դեսպանատան և Ֆիլիպինների պատվավոր հյուպատոսության նախկին աշխատակիցը։Պետրոս Կարապետյանը ներկայումս հանդիսանում է \"AM-SPT FZ\" ընկերության գլխավոր մենեջերը: Նախկինում աշխատել է Հայաստանում ԱՄՆ դեսպանատանը և Ֆիլիպինների պատվավոր հյուպատոսությունում:"
      },
      {
        id:3,
        fullName:"Պարույր Սարկիսյան",
        country:"ԱՄՆ, Չիկագո",
        img:paruyr_sarkisyan,
        flag: 'https://lipis.github.io/flag-icon-css/flags/4x3/um.svg',
        map:usa,
        email:'paruir.sarkisian@businessarmenia.am',
        text:"Պարույր Սարկիսյանը Հայաստանում, Ռուսաստանում և Բուլղարիայում բիզնես հաղորդակցության ոլորտում երկար տարիների փորձ ունի։ Նա նաև Երևան-Չիկագո քույր քաղաքների նախաձեռնող խմբի համանախագահն է։Պարույր Սարկիսյանն ունի երկար տարիների աշխատանքային փորձ Հայաստանում, Ռուսաստանում և Բուլղարիայում բիզնես հաղորդակցության ոլորտում։ Նա նաև Երևան-Չիկագո քույր քաղաքների նախաձեռնող խմբի համանախագահն է։"
      }
    ]
  }

  componentWillMount(){

    let obj = this.state.persons.find(per=>per.id === +this.props.match.params.id)
    if(!obj){
      this.props.history.push('/footprint')
    }
  }

  render(){
    const history_id = this.props.match.params.id;

    const {persons} = this.state
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
                  <img src={person.img} className="img-responsive rep-image" />
                </div>

                <div className="team-all-text">
                        <span>
                          <h3>{person.fullName}</h3>
                          <a href="#">{person.email}</a>
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

export default FootprintItem