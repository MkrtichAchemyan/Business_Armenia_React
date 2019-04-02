import React, { Component } from 'react'
import event1 from '../../assets/images/sagri.jpg'
import event2 from '../../assets/images/tr1fundraisingappeal.jpg'
import event3 from '../../assets/images/ciie.jpg'



class Events extends Component{
  state={
    events:[
      {
        id:1,
        img:event1,
        date:'14-21 Մարտ 2019',
        location:'Իրաք',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես...'
      },
      {
        id:2,
        img:event2,
        date:'12-16 Մարտ 2019',
        location:'Իրաք',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես...'
      },
      {
        id:3,
        img:event3,
        date:'10-12 Մարտ 2019',
        location:'Իրաք',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես...'
      }
    ]
  }

  changeUrl = (url)=>{
    this.props.history.push(url)
  };


  render(){
    const {events} = this.state;
    const event = events.map(event=>
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
                              Ամսաթիվ: {event.date}
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
            <a onClick={()=>{this.changeUrl('/events/'+event.id)}}>
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
                    <li><a href="#">Հայաստան</a></li>
                    <li><a href="#">Չինաստան</a></li>
                    <li><a href="#">Ֆրանսիա</a></li>
                    <li><a href="#">Վրաստան</a></li>
                    <li><a href="#">Իրան</a></li>
                    <li><a href="#">Իրաք</a></li>
                    <li><a href="#">Իտալիա</a></li>
                    <li><a href="#">Ճապոնիա</a></li>
                    <li><a href="#">Ղազախստան</a></li>
                    <li><a href="#">Լեհաստան</a></li>
                    <li><a href="#">Ռուսաստան</a></li>
                    <li><a href="#">Սիրիա</a></li>
                  </ul>
                </div>
                <div className="dropdown event-cat-menu-block">
                  <button className="btn btn-default  event-cat-menu" type="button" id="dropdownMenu1"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Կատեգորիա <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu event-cat-menu-list" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Բոլորը</a></li>
                    <li><a href="#">Ցուցահանդես</a></li>
                    <li><a href="#">Տենդեր</a></li>
                    <li><a href="#">Ֆորում</a></li>
                    <li><a href="#">Քննարկում</a></li>
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

export default Events