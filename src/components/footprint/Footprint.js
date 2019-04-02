import React, { Component } from 'react'

import 'jquery/src/jquery'
import 'bootstrap/dist/js/bootstrap'

import map from '../../assets/images/map-footprint.png'


class Footprint extends Component{
  state={
    items:[
      {
        id:1,
        top:"110.625px",
        left:"582.188px",
        link:'/footprint/',
        name: "Ահարոն Պապոյան",
        flag:'https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg',
        country:'ՌՈՒՍԱՍՏԱՆ'
      },
      {
        id:26,
        top:"278.5px",
        left:"539.797px",
        link:'/footprint/',
        name: "Պետրոս Կարապետյան",
        flag:'https://lipis.github.io/flag-icon-css/flags/4x3/ae.svg',
        country:'ԱՄԷ '
      },
      {
        id:3,
        top:"159.375px",
        left:"105.688px",
        link:'/footprint/',
        name: "Պարույր Սարկիսյան",
        flag:'https://lipis.github.io/flag-icon-css/flags/4x3/um.svg',
        country:'ԱՄՆ, Չիկագո'
      }
    ]
  }

  changeUrl = (url)=>{
    this.props.history.push(url)
  };


  mouseOver = (e,id)=>{
    document.getElementById(id).style.display = 'block'
  };
  mouseOut = (e,id)=>{
    document.getElementById(id).style.display = 'none'
  };

  render(){
    const {items} = this.state;
    const pointer = items.map(item=>

      <div key={item.id}>
        <a onClick={()=>{this.changeUrl(item.link+item.id)}} id={'pointer'+item.id} title=""
           className={`map-info-circle map-info-circle${item.id}`}
           onMouseOver={(e)=>{this.mouseOver(e,'tooltip'+item.id)}}
           onMouseOut={(e)=>{this.mouseOut(e,'tooltip'+item.id)}}
        >
        </a>
        < div
          className = "tooltip fade bottom in"
          role="tooltip"
          id={'tooltip'+item.id}
          style={{top:item.top, left: item.left, display: 'none'}}>
          <div
          className="tooltip-arrow"
          style={{left: '50%'}} >
        </div>
          <div className="tooltip-inner">
            <div className="map-info-img-div"></div >
            <a href="#">
              <div
                className="map-info-text-div" >
                <p className="map-info-text-name" >
                  <b>{item.name}<b>
                    <br />
                  </b>
                  </b>
                </p>
                <b>
                  <b>
                    <p>
                      <img className="footprint-flag-index" src={item.flag} />
                      {item.country}
                    </p>
                  </b>
                </b>
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
                  <p>Մենք աշխարհում</p>
                </div>
              </div>
            </div>


            <div className="row footprint-map-all">
              <div className="col-xs-12">
                <img src={map} className="img-responsive footprint-map-img"/>

                  <div className="footprint-map-all-info">
                    {pointer}
                  </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 footprint">
                <p className="page-description">2018 թվականի դեկտեմբերի դրությամբ Բիզնես Արմենիան աշխարհի 23 երկրում
                  ունի 35 ներկայացուցիչ, որոնք գործարար հանդիպումների ընթացքում 16 լեզվով ներկայացնում են Հայաստանի
                  ներդրումային գրավչությունն ու արտահանման ներուժը։ </p>
                <div className="footprint-button-div">
                  <button type="button" className="footprint-button" data-toggle="modal" data-target="#myModal">
                    <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "15px",padding:'0 10px 0 0'}}></i>
                    Դառնալ ներկայացուցիչ
                  </button>
                </div>

                {/*Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                  <div className="modal-dialog">

                   {/*Modal content*/}
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                        <h4 className="modal-title">Դառնալ ներկայացուցիչ</h4>
                      </div>
                      <div className="modal-body">

                        <form id="contact-form" action="/footprint" method="post" encType="multipart/form-data">
                          <input type="hidden" name="_csrf-frontend"
                                 value="XTJluiMznxp7rwZaGyVbH-JjYrZ4K8OfjkhJr67YamEvRwzASwP0N0_dNQp9Yj1J2iAM1Rd5iOn_LH3g_a1bNg==" />
                            <div className="form-group field-footprintform-first_name required">
                              <label className="control-label" htmlFor="footprintform-first_name">Անուն <span
                                className="red-asterix">*</span></label>
                              <input type="text" id="footprintform-first_name" className="form-control"
                                     name="FootprintForm[first_name]" autoFocus="" placeholder="Անուն"
                                     aria-required="true" />

                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group field-footprintform-last_name required">
                              <label className="control-label" htmlFor="footprintform-last_name">Ազգանուն <span
                                className="red-asterix">*</span></label>
                              <input type="text" id="footprintform-last_name" className="form-control"
                                     name="FootprintForm[last_name]" autoFocus="" placeholder="Ազգանուն"
                                     aria-required="true" />

                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group field-footprintform-email required">
                              <label className="control-label" htmlFor="footprintform-email">Էլ. հասցե <span
                                className="red-asterix">*</span></label>
                              <input type="text" id="footprintform-email" className="form-control"
                                     name="FootprintForm[email]" autoFocus="" placeholder="Էլ. հասցե"
                                     aria-required="true" />

                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group field-footprintform-file">
                              <label className="control-label" htmlFor="footprintform-file">Հավելված (Ինքնակենսագրական, մոտիվացիոն նամակ )</label>
                              <input type="hidden" name="FootprintForm[file]" value="" />
                                <input type="file"
                                       id="footprintform-file"
                                       name="FootprintForm[file]"
                                       title="Ընտրել ֆայլ" />
                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="footprintform-file-text-container">
                              <span id="footprintform-file-text">Ընտրել ֆայլ</span>
                            </div>
                            <div className="form-group field-footprintform-message">
                              <label className="control-label" htmlFor="footprintform-message">Մանրամասներ</label>
                              <textarea id="footprintform-message" className="form-control"
                                        name="FootprintForm[message]" rows="6"
                                        placeholder="Խնդրում ենք նշել մեզ միանալու ձեր շարժառիթը">
                              </textarea>
                              <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-my" name="contact-button">Ուղարկել</button>
                            </div>
                        </form>
                      </div>
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

export default Footprint