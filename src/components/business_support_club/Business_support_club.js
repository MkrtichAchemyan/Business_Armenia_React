import React, { Component } from 'react'
import {getBusinessSupportClub} from "../../actions";
import {connect} from "react-redux/src";



class BusinessSupportClub extends Component{


  componentDidMount() {
    this.props.businessSupportClub()

  }

  render(){
    const href = `javascript:void(0)`
    const items = this.props.data;
    const item = items && items.map(item=>
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

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    data: state.business_support_club.data
  }
}

const mapDispatchToProps = {
  businessSupportClub: getBusinessSupportClub,
};


export default connect(mapStateToProps,mapDispatchToProps)(BusinessSupportClub)