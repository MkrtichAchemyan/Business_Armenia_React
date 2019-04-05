import React, { Component } from 'react'
import avenue_consulting from '../../assets/images/avenue-consulting-group.png'
import arlian from '../../assets/images/arlian.jpg'
import proservise from '../../assets/images/proservice-l.png'



class BusinessSupportClub extends Component{
  state={
    items:[
      {
        id:1,
        name:"ԱՎԵՆՅՈՒ ՔԸՆՍԱԼԹԻՆԳ ԳՐՈՒՓ",
        text:"«Ավենյու քընսալթինգ գրուփը» անվճար տրամադրում է տնտեսության որևէ ճյուղի, մարդկային ռեսուրսների կառավարման համակարգի վերաբերյալ հակիրճ վերլուծություն, մշակում է կոմերցիոն պայմանագիր։ Ընկերությունը իր մյուս բոլոր ծառայությունները մատուցում է 30 տոկոս զեղչով։",
        img:avenue_consulting,
      },
      {
        id:2,
        name:"ԱՐԼԻԱՆ",
        text:"«ԱՐԼԻԱՆ»խորհրդատվական և թրեյնինգային ընկերությունը անվճար ախտորոշում է տնտեսվարող սուբյեկտի վիճակը, գնահատում վաճառքներով զբաղվող աշխատակազմի մասնագիտական կարողությունները, տրամադրում խորհրդատվություն, մշակում է մարքեթինգային եռամսյա բյուջե։ 20 տոկոս զեղչով տրամադրում է բիզնեսի կառավարման, պլանավորման, մարքեթինգային խորհրդատվություն, անցկացնում կադրային աուդիտ։",
        img:arlian,
      },
      {
        id:3,
        name:"ՊՐՈՍԵՐՎԻԶ Լ",
        text:"«Պրոսերվիզ Լ»ընկերությունը մարդկային ռեսուրսների կառավարման անվճար աուդիտ է անցկացնում։ 20 տոկոս զեղչով տրամադրում է անձնակազմի կառավարման խորհրդատվություն, տեղադրում ավտոմատացված համակարգ, կազմակերպում դասընթացներ։",
        img:proservise,
      }
    ]
  }
  render(){
    const href = `javascript:void(0)`
    const {items} = this.state;
    const item = items.map(item=>
      <div key={item.id}>
        <div className="container business-support-member-single">
          <a href={href}>
            <div className="col-md-2 business-support-member ">
              <img src={item.img} className="img-responsive " alt=''/>
            </div>
          </a>
          <div className="col-md-10 business-support-member-text">
            <div className="business-support-member-show-title">
              <p>{item.name}</p>
            </div>
            <div className="business-support-member-show-content">
              <p>
                {item.text}
              </p>
            </div>
            <div className="business-support-member-show-link">
              <a href={href}>ավելին
                <span>
                <i className="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
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
                  <p>Գործարարների աջակցության ակումբ</p>
                </div>
                <div className="page-description">Արտահանման և ներդրումների խթանման նպատակով Բիզնես Արմենիան ստեղծել է
                  Գործարարների աջակցության ակումբ, որի ծառայություններն էապես դյուրացնում են ամբողջ գործընթացը։ Ակումբի
                  անդամ ընկերությունները արտահանող և օտարերկրյա ուղղակի ներդրումներով ընկերություններին խորհրդատվություն
                  և ծառայություններ են մատուցում բացառիկ պայմաններով։<br/><br/>Ակումբը ստեղծվել է արտահանման և
                    ներդրումների աջակցությանն ուղղված ծրագրի շրջանակում։ Գործարարների աջակցության ակումբը բաց է այլ
                    խորհրդատվական, բիզնեսի ծառայություններ մատուցող ընկերությունների համար։
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-xs-12">
              <div className="business-support-contant2-title">
                <p>Գործարարների աջակցության ակումբի անդամներ</p>
              </div>
            </div>
          </div>

          {item}

        </div>
      </>
    )
  }
}

export default BusinessSupportClub