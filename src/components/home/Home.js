import React, { Component} from 'react'
import Slider from "../slider/Slider";
import IndexNumbers from "../index_numbers/Index_numbers";
import NewsAndEvents from "../news_and_events/News_and events";
import HomeMap from "../home_map/Home_map";
import HomePartners from "../home_partners/Home_partners";
import {getHome} from "../../actions";
import {connect} from "react-redux/src";

class Home extends Component{
  componentDidMount() {
    this.props.home()
  }


    render(){
      const homeData = this.props.data;
      const home = homeData.map((home)=>{
          return(
              <div key={"home"}>
                  <Slider
                      slides={home.slides}
                  />
                  <IndexNumbers
                      index_numbers={home.index_numbers}
                      history={this.props.history}
                  />
                  <NewsAndEvents
                      news={home.news}
                      events={home.events}
                      history={this.props.history}
                  />
                  <HomeMap history={this.props.history}/>
                  <HomePartners
                      partners={home.partners}
                      history={this.props.history}
                  />
              </div>
          )
      })
        return(
            <>
                {home}
            </>
        )
    }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    data: state.home.data
  }
}



const mapDispatchToProps = {
  home: getHome,
};


export default connect(mapStateToProps,mapDispatchToProps)(Home)