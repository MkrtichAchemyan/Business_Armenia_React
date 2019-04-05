import React, { Component } from 'react'
import news_1 from "../../assets/images/img6624.jpg";
import news_2 from "../../assets/images/aram.jpg";
import news_3 from "../../assets/images/chicago.jpg";
import news_4 from "../../assets/images/img6440.jpg";
import news_5 from "../../assets/images/amore.jpg";
import news_6 from "../../assets/images/kwop8883.jpg";

import slide from "../../assets/images/img2600.jpg"



class News extends Component{
  state={
    news:[
      {
        id:1,
        img:news_1,
        day:'13',
        month:'Մարտ',
        year:'2019',
        text:'Հայաստանյան կաշվե արտադրության պոտենցիալը ներկայացված է միջազգային ցուցահանդեսում...'
      },
      {
        id:2,
        img:news_2,
        day:'12',
        month:'Մարտ',
        year:'2019',
        text:'Բուլղարացի գործարարներին են ներկայացվել Հայաստանի ներդրումային հնարավորությունները...'
      }
      ,
      {
        id:3,
        img:news_3,
        day:'12',
        month:'Մարտ',
        year:'2019',
        text:'Բուլղարացի գործարարներին են ներկայացվել Հայաստանի ներդրումային հնարավորությունները...'
      }
      ,
      {
        id:4,
        img:news_4,
        day:'12',
        month:'Մարտ',
        year:'2019',
        text:'Բուլղարացի գործարարներին են ներկայացվել Հայաստանի ներդրումային հնարավորությունները...'
      }
      ,
      {
        id:5,
        img:news_5,
        day:'12',
        month:'Մարտ',
        year:'2019',
        text:'Բուլղարացի գործարարներին են ներկայացվել Հայաստանի ներդրումային հնարավորությունները...'
      }
      ,
      {
        id:6,
        img:news_6,
        day:'12',
        month:'Մարտ',
        year:'2019',
        text:'Բուլղարացի գործարարներին են ներկայացվել Հայաստանի ներդրումային հնարավորությունները...'
      }
    ],
  }

  changeUrl = (url)=>{
    this.props.history.push(url)
  };


  render(){
    const href = `javascript:void(0)`
    const {news} = this.state;
    const news_i = news.map(news=>
      <div data-key={news.id} key={news.id}>
        <div className="col-sm-4">
          <div className="home-news-content" style={{backgroundImage: `url(${news.img})`}}>
            <a href={href} onClick={()=>{this.changeUrl('/news/'+news.id)}}>
              <div className="home-news-content-div">

                <div className="home-news-content-date">
                  <p>{news.day}</p><p className="month">{news.month}</p><p className="post-single-year">{news.year}</p>
                </div>
                <div className="home-news-content-text">
                  <h3 className="home-news-content-text-h3">
                    {news.text}
                  </h3>
                </div>

              </div>
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
                  <p>Նորություններ</p>
                </div>
              </div>
            </div>

            <div>
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                </ol>

                <div className="carousel-inner">

                  <div className="item active">
                    <div className="carousel-caption">
                      <a href={href}>
                        <h3
                      className="news-slider-title home-news-content-text-h3">Բիզնեսի 16 գործընկեր. Գործարարների
                      աջակցության ակումբը շարունակում է համալրվել </h3></a></div>
                    <a href={href}>
                      <img className="news-img" src={slide} style={{width:"100%", height:"400px"}} alt=''/>
                    </a>
                  </div>


                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>


            </div>


            <div className="row">
              <div id="w0" className="list-view">
                {news_i}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default News