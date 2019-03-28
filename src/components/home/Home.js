import React, { Component} from 'react'
import gov from "../../assets/images/gov.png";
import mineconomy from "../../assets/images/mineconomy.png";
import mid from "../../assets/images/mid.png";
import tourism from "../../assets/images/tourism.png";
import atdf from "../../assets/images/atdf.png";
import adb from "../../assets/images/adb.png";
import undp from "../../assets/images/undp.png";
import ada from "../../assets/images/ada.png";
import ifc from "../../assets/images/ifc.png";
import giz from "../../assets/images/giz.png";
import eu from "../../assets/images/eu.png";
import news_1 from "../../assets/images/img6624.jpg";
import news_2 from "../../assets/images/aram.jpg";
import event_1 from "../../assets/images/439-mosshoes.jpg";
import slide_1 from "../../assets/images/export.jpg";
import slide_2 from "../../assets/images/business-support-club.jpg";
import slide_3 from "../../assets/images/slider-1.jpg";
import Slider from "../slider/Slider";
import IndexNumbers from "../index_numbers/Index_numbers";
import News_and_events from "../news_and_events/News_and events";
import Home_map from "../home_map/Home_map";
import Partners from "../partners/Partners";

class Home extends Component{
  state = {
    partners:[
      {
        id:"gov",
        src:gov
      },
      {
        id:"mineconomy",
        src:mineconomy
      },
      {
        id:"mid",
        src:mid
      },
      {
        id:"tourism",
        src:tourism
      },
      {
        id:"atdf",
        src:atdf
      },
      {
        id:"adb",
        src:adb
      },
      {
        id:"undp",
        src:undp
      },
      {
        id:"ada",
        src:ada
      },
      {
        id:"ifc",
        src:ifc
      },
      {
        id:"giz",
        src:giz
      },
      {
        id:"eu",
        src:eu
      },

    ],
    index_numbers:[
      {
        id:1,
        count:35,
        statistics:'ՊԱՇՏՈՆԱԿԱՆ ՆԵՐԿԱՅԱՑՈՒՑԻՉՆԵՐ',
        title:''
      },
      {
        id:2,
        count:6.789,
        statistics:'ԱՐՏԱՀԱՆՄԱՆ ՊԱՅՄԱՆԱԳՐԵՐ',
        title:'ՄԼՐԴ․ ԴՐԱՄ'
      },
      {
        id:3,
        count:21.10,
        statistics:'ՆԵՐԴՐՈՒՄՆԵՐ',
        title:'ՄԼՆ․ ԴՐԱՄ'
      },
      {
        id:4,
        count:22,
        statistics:'ԲԻԶՆԵՍԻ ԱՋԱԿՑՄԱՆ ԳՈՐԾԸՆԿԵՐՆԵՐ',
        title:''
      },
    ],
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
    ],
    events:[
      {
        id:1,
        img:event_1,
        day:'12-15',
        month:'Մարտ',
        year:'2019',
        text:'2019 թ.-ի մարտի 12-15-ին կկայանա «Mos Shoes» միջազգային ցուցահանդեսը...'
      }
    ],
    slides:[
      {
        id:1,
        date:'26 December 2019',
        title:'Lorem Ipsum Dolor',
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
        img:slide_1
      },
      {
        id:2,
        date:'27 December 2019',
        title:'Lorem Ipsum Dolor',
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
        img:slide_2
      },
      {
        id:3,
        date:'28 December 2019',
        title:'Lorem Ipsum Dolor',
        text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
        img:slide_3
      }
    ]
  }
    render(){
      const {partners} = this.state
      const {index_numbers} = this.state
      const {news} = this.state
      const {events} = this.state
      const {slides} = this.state
        return(
            <>
              <>
                <Slider
                  slides={slides}
                />
                <IndexNumbers
                  index_numbers={index_numbers}
                />
                <News_and_events
                  news={news}
                  events={events}
                />
                <Home_map/>
                <Partners
                  partners={partners}
                />
              </>
            </>
        )
    }
}

export default Home