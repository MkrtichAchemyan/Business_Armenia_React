import React, { Component } from 'react'
import {getNews} from "../../actions";
import {connect} from "react-redux/src";

class NewsDetails extends Component{
  componentDidMount() {
    this.props.news()

  }

  componentWillReceiveProps(nextProps){
    let obj = nextProps.data.find(news=>news.id === +this.props.match.params.id)
    if(!obj){
      this.props.history.push('/news')
    }
  }

  render(){
    const history_id = this.props.match.params.id;
    const href = `javascript:void(0)`

    const news = this.props.data
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
                  <img src={slide.img} style={{width:"100%"}} alt='' />
                </div>
                :
                <div className="item" key={slide.data_slide}>
                  <img src={slide.img} style={{width:"100%"}} alt=''/>
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
                <div className="addthis_inline_share_toolbox_ol8t" style={{clear: "both"}}>
                  <p id="shareText">Կիսվել։</p>
                  <div id="atstbx"
                       className="at-resp-share-element at-style-responsive addthis-smartlayers addthis-animated at4-show"
                       aria-labelledby="at-187295c0-c07f-4749-9304-84a198f16dec" role="region">
                    <div className="at-share-btn-elements">
                      <a role="button" tabIndex="1"
                         href={href}
                         className="at-icon-wrapper at-share-btn at-svc-facebook"
                         style={{backgroundColor: "rgb(59, 89, 152)", borderRadius: "12px"}}>
                        <span className="at4-visually-hidden">
                        </span>
                        <span className="at-icon-wrapper" style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                          {/*<i className="fab fa-facebook-f"></i>*/}
                          <svg xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-facebook-1"
                               style={{fill: "rgb(255, 255, 255)", width: "20px", height: "20px"}}
                               className="at-icon at-icon-facebook">
                            <title id="at-svg-facebook-1">Facebook</title>
                            <g>
                              <path
                                d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z"
                                fillRule="evenodd">
                              </path>
                            </g>
                          </svg>
                        </span>
                      </a>
                      <a role="button" tabIndex="1"
                         href={href}
                         className="at-icon-wrapper at-share-btn at-svc-twitter"
                         style={{backgroundColor: "rgb(59, 89, 152)", borderRadius: "12px"}}>
                        <span className="at4-visually-hidden">
                        </span>
                        <span className="at-icon-wrapper" style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                          {/*<i className="fab fa-twitter"></i>*/}
                          <svg xmlns="http://www.w3.org/2000/svg"
                               // xmlns:xlink="http://www.w3.org/1999/xlink"
                               viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-twitter-2"
                               style={{fill: "rgb(255, 255, 255)", width: "20px", height: "20px"}}
                               className="at-icon at-icon-twitter">
                            <title id="at-svg-twitter-2">Twitter</title>
                            <g>
                              <path
                                d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336"
                                fillRule="evenodd">
                              </path>
                            </g>
                          </svg>
                        </span>
                      </a>
                      <a role="button" tabIndex="1"
                         href={href}
                         className="at-icon-wrapper at-share-btn at-svc-linkedin"
                         style={{backgroundColor: "rgb(59, 89, 152)", borderRadius: "12px"}}>
                        <span className="at4-visually-hidden">
                        </span>
                        <span className="at-icon-wrapper"
                              style={{lineHeight: "20px", height: "20px", width: "20px"}}>
                          {/*<i className="fab fa-linkedin-in"></i>*/}
                          <svg xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                               viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-linkedin-3"
                               style={{fill: "rgb(255, 255, 255)", width: "20px", height: "20px"}}
                               className="at-icon at-icon-linkedin">
                            <title id="at-svg-linkedin-3">LinkedIn</title>
                            <g>
                              <path
                                d="M26 25.963h-4.185v-6.55c0-1.56-.027-3.57-2.175-3.57-2.18 0-2.51 1.7-2.51 3.46v6.66h-4.182V12.495h4.012v1.84h.058c.558-1.058 1.924-2.174 3.96-2.174 4.24 0 5.022 2.79 5.022 6.417v7.386zM8.23 10.655a2.426 2.426 0 0 1 0-4.855 2.427 2.427 0 0 1 0 4.855zm-2.098 1.84h4.19v13.468h-4.19V12.495z"
                                fillRule="evenodd">
                              </path>
                            </g>
                          </svg>
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

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    data: state.news.data
  }
}



const mapDispatchToProps = {
  news: getNews,
};


export default connect(mapStateToProps,mapDispatchToProps)(NewsDetails)