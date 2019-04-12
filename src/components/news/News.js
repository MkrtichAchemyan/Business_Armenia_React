import React, { Component } from 'react'
import slide from "../../assets/images/img2600.jpg"
import {getNews} from "../../actions";
import {connect} from "react-redux/src";



class News extends Component{

  componentDidMount() {
    this.props.news()

  }

  changeUrl = (url)=>{
    this.props.history.push(url)
  };


  render(){
    const href = `javascript:void(0)`
    const news = this.props.data;
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
                    {news.title}
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

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    data: state.news.data
  }
}



const mapDispatchToProps = {
  news: getNews,
};


export default connect(mapStateToProps,mapDispatchToProps)(News)