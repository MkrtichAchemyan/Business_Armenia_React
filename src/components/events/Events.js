import React, { Component } from 'react'
import {getEvents} from "../../actions";
import {connect} from "react-redux/src";



class Events extends Component{

  componentDidMount() {
    this.props.events()

  }

  changeUrl = (url)=>{
    this.props.history.push(url)
  };


  render(){
    const href = `javascript:void(0)`
    const events = this.props.data;
    const event = events && events.map(event=>
      <div data-key={event.id} key={event.id}>
        <div className="col-sm-4">
          <div className="event-content">
            <div className="event-content-div">
              <div className="event-content-img">
                <img src={event.img} className="img-responsive" alt='' />
              </div>
              <div className="event-content-all">
                <div className="event-content-date">
                  <p style={{fontSize: '14px',paddingTop: '6px',marginBottom: 0}}>
                              <span>
                              <i className="fa fa-calendar" aria-hidden="true"></i>
                              Ամսաթիվ: {event.day}{event.month}{event.year}
                              </span>
                  </p>
                  <p style={{fontSize: '14px',paddingTop: '6px',marginBottom: 0}}>
                              <span>
                              <i className="fa fa-map-marker" aria-hidden="true"></i>
                                Վայր: {event.location}
                              </span>
                  </p>
                </div>
                <div className="event-content-text">
                  <h3 className="event-content-text-h3">
                    {event.title}
                  </h3>
                </div>
              </div>
            </div>
            <a href={href} onClick={()=>{this.changeUrl('/events/'+event.id)}}>
              <div className="event-read-more">
                <p>Ավելին...</p>
              </div>
            </a></div>
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
                  <p>Առաջիկա միջոցառումներ</p>
                </div>
                <p className="page-description">Բիզնես Արմենիայի պաշտոնական կայքի «Միջոցառումներ» բաժինն այն գլխավոր
                  հարթակն է, որտեղից գործարարներն առաջինը կարող են տեղեկանալ նախատեսվող միջազգային ցուցահանդեսների,
                  համաժողովների, գործարար զրույցների, այլ միջոցառումների մասին և մասնակցության հայտ ներկայացնել։</p>
              </div>
              <div style={{paddingRight:0}}>
                <div className="dropdown event-cat-menu-block">
                  <button className="btn btn-default  event-cat-menu" type="button" id="dropdownMenu1"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Վայր
                    <span className="caret"></span>
                  </button>

                  <ul className="dropdown-menu event-cat-menu-list" aria-labelledby="dropdownMenu1">
                    <li><a href={href}>Հայաստան</a></li>
                    <li><a href={href}>Չինաստան</a></li>
                    <li><a href={href}>Ֆրանսիա</a></li>
                    <li><a href={href}>Վրաստան</a></li>
                    <li><a href={href}>Իրան</a></li>
                    <li><a href={href}>Իրաք</a></li>
                    <li><a href={href}>Իտալիա</a></li>
                    <li><a href={href}>Ճապոնիա</a></li>
                    <li><a href={href}>Ղազախստան</a></li>
                    <li><a href={href}>Լեհաստան</a></li>
                    <li><a href={href}>Ռուսաստան</a></li>
                    <li><a href={href}>Սիրիա</a></li>
                  </ul>
                </div>
                <div className="dropdown event-cat-menu-block">
                  <button className="btn btn-default  event-cat-menu" type="button" id="dropdownMenu1"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Կատեգորիա <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu event-cat-menu-list" aria-labelledby="dropdownMenu1">
                    <li><a href={href}>Բոլորը</a></li>
                    <li><a href={href}>Ցուցահանդես</a></li>
                    <li><a href={href}>Տենդեր</a></li>
                    <li><a href={href}>Ֆորում</a></li>
                    <li><a href={href}>Քննարկում</a></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="row">

                <div id="w0" className="list-view">
                  {event}
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
    data: state.events.data
  }
}



const mapDispatchToProps = {
  events: getEvents,
};


export default connect(mapStateToProps,mapDispatchToProps)(Events)