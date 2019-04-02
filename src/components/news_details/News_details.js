import React, { Component } from 'react'
import news_1 from "../../assets/images/img6624.jpg";
import news_2 from "../../assets/images/aram.jpg";
import news_3 from "../../assets/images/chicago.jpg";
import news_4 from "../../assets/images/img6440.jpg";
import news_5 from "../../assets/images/amore.jpg";
import news_6 from "../../assets/images/kwop8883.jpg";



import news_1_slide_1 from "../../assets/images/img6641.jpg";
import news_1_slide_2 from "../../assets/images/img6622.jpg";
import news_1_slide_3 from "../../assets/images/img6642.jpg";

import news_2_slide_1 from "../../assets/images/img3584.jpg";
import news_2_slide_2 from "../../assets/images/img3623.jpg";
import news_2_slide_3 from "../../assets/images/img3653.jpg";

import news_3_slide_1 from "../../assets/images/usa.jpg";
import news_3_slide_2 from "../../assets/images/canada-2.jpg";
import news_3_slide_3 from "../../assets/images/usa-4.jpg";


import news_4_slide_1 from "../../assets/images/img6641.jpg";
import news_4_slide_2 from "../../assets/images/img6622.jpg";
import news_4_slide_3 from "../../assets/images/img6642.jpg";


import news_5_slide_1 from "../../assets/images/img3584.jpg";
import news_5_slide_2 from "../../assets/images/img3623.jpg";
import news_5_slide_3 from "../../assets/images/img3653.jpg";


import news_6_slide_1 from "../../assets/images/usa.jpg";
import news_6_slide_2 from "../../assets/images/canada-2.jpg";
import news_6_slide_3 from "../../assets/images/usa-4.jpg";





class NewsDetails extends Component{
  state={
    news:[
      {
        id:1,
        slides:[
          {
            img:news_1_slide_1,
            data_slide:0
          },
          {
            img:news_1_slide_2,
            data_slide:1
          },
          {
            img:news_1_slide_3,
            data_slide:2
          }
        ],
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: news_1,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
      {
        id:2,
        slides:[
          {
            img:news_2_slide_1,
            data_slide:0
          },
          {
            img:news_2_slide_2,
            data_slide:1
          },
          {
            img:news_2_slide_3,
            data_slide:2
          }
        ],
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: news_2,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
      {
        id:3,
        slides:[
          {
            img:news_3_slide_1,
            data_slide:0
          },
          {
            img:news_3_slide_2,
            data_slide:1
          },
          {
            img:news_3_slide_3,
            data_slide:2
          }
        ],
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: news_3,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
      {
        id:4,
        slides:[
          {
            img:news_4_slide_1,
            data_slide:0
          },
          {
            img:news_4_slide_2,
            data_slide:1
          },
          {
            img:news_4_slide_3,
            data_slide:2
          }
        ],
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: news_4,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
      {
        id:5,
        slides:[
          {
            img:news_5_slide_1,
            data_slide:0
          },
          {
            img:news_5_slide_2,
            data_slide:1
          },
          {
            img:news_5_slide_3,
            data_slide:2
          }
        ],
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: news_5,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
      {
        id:6,
        slides:[
          {
            img:news_6_slide_1,
            data_slide:0
          },
          {
            img:news_6_slide_2,
            data_slide:1
          },
          {
            img:news_6_slide_3,
            data_slide:2
          }
        ],
        day:'14-21 ',
        month:'ՄԱՐՏ',
        year:'2019',
        title:'Գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես',
        img: news_6,
        text:'Տեղեկացնում ենք, որ Իրաքի Հանրապետության մայրաքաղաք Բաղդադում ս․թ․ մարտի 14-21-ը տեղի է ունենալու գյուղատնտեսական և անասնապահական ապրանքների և արտադրանքի ցուցահանդես։ \n' +
          'Միջոցառման կազմակերպիչ ընկերությունը պատրաստ է անվճար տրամադրել 9 քառ․ մետր ցուցադրական տարածք։ \n' +
          'Կից ներկայացնում ենք ցուցահանդեսի մասնակցության դիմում-հարցաթերթիկը, ինչպես նաև միջոցառման վերաբերյալ որոշ տեղեկատվական նյութեր։'
      },
    ]
  }


  componentWillMount(){

    let obj = this.state.news.find(news=>news.id === +this.props.match.params.id)
    if(!obj){
      this.props.history.push('/news')
    }
  }

  render(){
    const history_id = this.props.match.params.id;

    const {news} = this.state
    let news_item = news.map((news)=>{

      return news.id === +history_id && <div className='container' key={news.id}>
        <div className="single-ev-content-top" style={{marginTop: 0}}>
          <div className="single-img">
            <div className="single-ev-content-date single-ev-content-date-mobile">
              <p>{news.day}</p>
              <p style={{textTransform:"uppercase",fontSize: "11px"}}>{news.month}</p>
            </div>
            <img src={news.img} className="img-responsive" alt='' />
          </div>


          <div className="single-ev-title">
            <div className="single-ev-content-date single-ev-content-date-full">
              <p>{news.day}</p>
              <p style={{textTransform:"uppercase",fontSize: "17px"}}>{news.month}</p>
              <p className="post-single-year">{news.year}</p>
            </div>
            <div className="single-ev-content-title">
              <h1>{news.title}</h1>
            </div>
          </div>
        </div>

        <div className="single-ev-content ">
          <p></p>
          <p>
            {news.text}
          </p>
          <p></p>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {
              news.slides.map(slide=>slide.data_slide===0?
                <li data-target="#myCarousel" data-slide-to={slide.data_slide} key={slide.data_slide} className='active'>
                </li>
                :
                <li data-target="#myCarousel" data-slide-to={slide.data_slide} key={slide.data_slide}>
                </li>
              )
            }
            </ol>

            <div className="carousel-inner">
              {
              news.slides.map(slide=>slide.data_slide===0?
                <div className="item active" key={slide.data_slide}>
                  <img src={slide.img} style={{width:"100%"}} />
                </div>
                :
                <div className="item" key={slide.data_slide}>
                  <img src={slide.img} style={{width:"100%"}} />
                </div>
              )}
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
      </div>
    })
    return(
      <>
        <div className="all-content single-news-page">
          <div className="container">

            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>Նորություններ</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">

                {news_item}

                <div className="addthis_inline_share_toolbox_ol8t">
                  <p id="shareText">Կիսվել։</p>
                  <div id="atstbx"
                       className="at-resp-share-element at-style-responsive addthis-smartlayers addthis-animated at4-show"
                       aria-labelledby="at-187295c0-c07f-4749-9304-84a198f16dec" role="region">
                    <div className="at-share-btn-elements">
                      <a role="button" tabIndex="1"
                         className="at-icon-wrapper at-share-btn at-svc-facebook"
                         style={{backgroundColor: "rgb(59, 89, 152)", borderRadius: "12px"}}>
                        <span className="at4-visually-hidden">
                        </span>
                        <span className="at-icon-wrapper"
                              style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                          <i className="fab fa-facebook-f"></i>

                        </span>
                      </a>
                      <a role="button" tabIndex="1"
                         className="at-icon-wrapper at-share-btn at-svc-twitter"
                         style={{backgroundColor: "rgb(59, 89, 152)", borderRadius: "12px"}}>
                        <span className="at4-visually-hidden">
                        </span>
                        <span className="at-icon-wrapper"
                              style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                          <i className="fab fa-twitter"></i>
                        </span>
                      </a>
                      <a role="button" tabIndex="1"
                         className="at-icon-wrapper at-share-btn at-svc-linkedin"
                         style={{backgroundColor: "rgb(59, 89, 152)", borderRadius: "12px"}}>
                        <span className="at4-visually-hidden">
                        </span>
                        <span className="at-icon-wrapper"
                              style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                          <i className="fab fa-linkedin-in"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewsDetails