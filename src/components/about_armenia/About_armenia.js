import React, { Component } from 'react'
import jewelry from '../../assets/images/jewelry-brochure-new.jpg'


class AboutArmenia extends Component{
  state={
    items:[
      {
        id:1,
        category:"JEVELRY",
        img:jewelry
      },
      {
        id:2,
        category:"JEVELRY",
        img:jewelry
      },
      {
        id:3,
        category:"JEVELRY",
        img:jewelry
      },
      {
        id:4,
        category:"JEVELRY",
        img:jewelry
      },
      {
        id:5,
        category:"JEVELRY",
        img:jewelry
      },
      {
        id:6,
        category:"JEVELRY",
        img:jewelry
      }
    ]
  }
  render(){
    const {items} = this.state;
    const href = `javascript:void(0)`
    const item = items.map(item=>
      <div className="col-sm-4 team-all-col" style={{marginTop:0}} key={item.id}>
        <div className="event-content" style={{marginTop:0}}>
          <a href={href} className="corporate-style-pdf attachmentWrapper">
            <div className="team-all-img brandbook-single-img sectorial-img">
              <img src={item.img} className="img-responsive" alt=''/>
            </div>
            <div className="event-read-more sectorials-read-more">
              <p>Ավելին...</p>
            </div>
          </a>
        </div>
      </div>
    )

    return(
      <>
        <div className="all-content">
          <div className="container corporate-all">
            <div className="row ">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>Հայաստանի մասին</p>
                </div>
                <div className="page-description">
                </div>
              </div>
            </div>
            <div className="page-description sectorials-page row">
              {item}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AboutArmenia