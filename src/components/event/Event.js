import React, { Component } from 'react'
import './event.css'
import event1 from '../../assets/images/sagri.jpg'
import event2 from '../../assets/images/tr1fundraisingappeal.jpg'
import event3 from '../../assets/images/ciie.jpg'



class Event extends Component{
  state={
    events:[
      {
        id:1,
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: event1,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
      {
        id:2,
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: event2,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
      {
        id:3,
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: event3,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
    ]
  }

  componentWillMount(){

    let obj = this.state.events.find(ev=>ev.id === +this.props.match.params.id)
    if(!obj){
      this.props.history.push('/events')
    }
  }

  render(){
    const history_id = this.props.match.params.id;

    const {events} = this.state
    let event = events.map((event)=>{

      return event.id === +history_id && <div className="col-xs-12" key={event.id}>
        <div className="single-ev-content-top">
          <div className="single-img">
            <img src={event.img} className="img-responsive" alt='' />
          </div>

          <div className="single-ev-title">
            <div className="single-ev-content-date">
              <p>{event.day}</p>
              <p style={{fontSize: "17px"}}>{event.month}</p>
              <p className="post-single-year">{event.year}</p>
            </div>
            <div className="single-ev-content-title">
              <h1>{event.title}</h1>
            </div>
          </div>
        </div>

        <div className="single-ev-content ">
          <p>

          </p>
          <p>
            {event.text}
          </p>
          <p>
            <a href="#"
               className="attachmentWrapper">
              <i className="far fa-file-pdf iconPdf"></i>
              Կից տեղեկատվություն
            </a>
          </p>
          <p></p>
        </div>


        <br/>
        <div className="addthis_inline_share_toolbox_ol8t"
             style={{clear: "both"}}>
          <p id="shareText">Կիսվել։</p>
          <div id="atstbx"
               className="at-resp-share-element at-style-responsive addthis-smartlayers addthis-animated at4-show"
               aria-labelledby="at-f40b62b3-84f2-471b-ba02-4c9012281171" role="region">
            <div className="at-share-btn-elements">
              <a role="button" tabIndex="1"
                 className="at-icon-wrapper at-share-btn at-svc-facebook"
                 style={{backgroundColor: 'rgb(59, 89, 152)', borderRadius: '12px'}}>
                <span className="at-icon-wrapper" style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
              <a role="button" tabIndex="1"
                 className="at-icon-wrapper at-share-btn at-svc-twitter"
                 style={{backgroundColor: "rgb(29, 161, 242)", borderRadius: "12px"}}>
                <span className="at-icon-wrapper" style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                  <i className="fab fa-twitter"></i>
                </span>
              </a>
              <a role="button" tabIndex="1"
                 className="at-icon-wrapper at-share-btn at-svc-linkedin"
                 style={{backgroundColor: "rgb(0, 119, 181)", borderRadius: "12px"}}>
                <span className="at-icon-wrapper"
                      style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    })
    return(
      <>
        <div className="all-content">
          <div className='container'>
            <div className="row">
              {event}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Event