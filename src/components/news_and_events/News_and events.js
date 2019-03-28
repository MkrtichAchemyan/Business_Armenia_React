import React, { Component} from 'react'



class NewsAndEvents extends Component{
  render(){
    const {news} = this.props
    const {events} = this.props
    const news_item = news.map(item=>
      <div key={item.id} className="col-sm-4">
        <div className="news-all-content" style={{backgroundImage: `url(${item.img})`}} >
          <a href="#">
            <div className="news-all">
              <div className="news-all-date">
                <p>{item.day}</p>
                <p className="month">{item.month}</p>
                <p>{item.year}</p>
              </div>
              <div className="news-all-text">
                <h3 className="news-all-text-h3">{item.text}</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
    const events_item = events.map(item=>
      <div className="col-sm-4" key={item.id}>
        <div className="home-event-content">
          <div className="home-event-content-div">
            <div className="home-event-content-img" style={{backgroundImage:`url(${item.img})`}}>

            </div>
            <div className="home-event-content-all">
              <div className="home-event-content-date">
                <p>{item.month}{item.day}{item.year}</p>
              </div>
              <div className="home-event-content-text">
                <h3 className="home-event-content-text-h3">
                  <a href="#">{item.text}</a>
                </h3>
              </div>

              <div className="home-event-content-link-div">
                <a className="home-event-content-link" href="#">Ավելին >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    return(
      <>
        <div className='container'>
          <div className="row home-news-title">
            <div className="col-xs-8 home-news">
              <div className="home-news-title-c">
                <p className="home-news-title-c1">
                  <a href="#">Նորություններ</a></p>
              </div>
            </div>
            <div className="col-xs-4 home-events">
              <div className="home-news-title-c">
                <p className="home-news-title-c1">
                  <a href="#">Միջոցառումներ</a></p>
              </div>
            </div>
          </div>

          <div className="row news-home-row">

            <div className=" home-news-mobile">
              <div className="home-news-title-c">
                <p className="home-news-title-c1">Նորություններ</p>
              </div>
            </div>
            {news_item}

            <div className="home-events-mobile">
              <div className="home-news-title-c">
                <p className="home-news-title-c1">Միջոցառումներ</p>
              </div>
            </div>
            {events_item}
          </div>
        </div>
      </>
    )
  }
}

export default NewsAndEvents