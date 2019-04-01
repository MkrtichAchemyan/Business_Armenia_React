import React, { Component } from 'react'
import pdf from '../../assets/pdf/Insider_Trading.pdf'


class Corporate extends Component{
  state={
    items:[
      {
        id:1,
        date:"16.03.2018",
        title:"ԻՆՍԱՅԴԵՐԱԿԱՆ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ",
        size:'7.9 Մբ',
        src: pdf
      },
      {
        id:2,
        date:"16.03.2018",
        title:"ԻՆՍԱՅԴԵՐԱԿԱՆ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ",
        size:'7.9 Մբ',
        src: pdf
      },
      {
        id:3,
        date:"16.03.2018",
        title:"ԻՆՍԱՅԴԵՐԱԿԱՆ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ",
        size:'7.9 Մբ',
        src: pdf
      },
      {
        id:4,
        date:"16.03.2018",
        title:"ԻՆՍԱՅԴԵՐԱԿԱՆ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ",
        size:'7.9 Մբ',
        src: pdf
      },
      {
        id:5,
        date:"16.03.2018",
        title:"ԻՆՍԱՅԴԵՐԱԿԱՆ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ",
        size:'7.9 Մբ',
        src: pdf
      },
    ]
  }
  render(){
    const {items} = this.state;
    const item = items.map(item=>
      <div className="row corporate-info-row" key={item.id}>
        <div className="col-md-11 corporate-text-all">
          <div className="corporate-info">
            <p className="corporate-date">Թարմացված է {item.date}</p>
            <p className="corporate-title">{item.title}</p>
          </div>
        </div>

        <div className="col-md-1 corporate-pdf">
          <div className="corporate-pdf-all ">
            <a href={item.src} target="_blank" className="attachmentWrapper">
               <div className="corporate-pdf-icon">
                 <i className="far fa-file-pdf"></i>
               </div>
              <div className="corporate-pdf-text">
                <p className="corporate-pdf-size">{item.size}</p>
              </div>
              <div className="corporate-pdf-arrow">
                <i className="fas fa-arrow-down"></i>
              </div>
            </a>
          </div>

        </div>
      </div>
    )

    return(
      <>
        <div className="all-content">
          <div className="container corporate-all">

            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>ԿՈՐՊՈՐԱՏԻՎ ԿԱՌԱՎԱՐՈՒՄ</p>
                </div>
                <div className="page-description">
                  {item}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Corporate