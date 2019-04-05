import React, { Component} from 'react'
import gov from '../../assets/images/partners/gov.png'
import min from '../../assets/images/partners/mineconomy.png'
import mid from '../../assets/images/partners/mid.png'
import travel from '../../assets/images/partners/tourism.png'
import atdf from '../../assets/images/partners/atdf.png'
import vine_wine from '../../assets/images/partners/vine-wine.png'
import cilicia from '../../assets/images/partners/cilicia.png'
import armenian_caritas from '../../assets/images/partners/armenian-caritas.png'
import rip from '../../assets/images/partners/artsakh-investment-fund.png'
import invest_club from '../../assets/images/partners/investors-club-of-armenia.png'
import repat_armenia from '../../assets/images/partners/repat-armenia.png'
import yenokavan from '../../assets/images/partners/yenokavan-development-foundation.png'
import sau from '../../assets/images/partners/sau.png'
import cmyk from '../../assets/images/partners/cmyk.png'


import adb from '../../assets/images/partners/adb.png'
import undp from '../../assets/images/partners/undp.png'
import ada from '../../assets/images/partners/ada.png'
import ifc from '../../assets/images/partners/ifc.png'
import giz from '../../assets/images/partners/giz.png'
import eu from '../../assets/images/partners/eu.png'
import itc from '../../assets/images/partners/itc.png'
import wbg from '../../assets/images/partners/wbg.png'
import rdcl_world from '../../assets/images/partners/rdcl-world.png'
import ali from '../../assets/images/partners/association-of-lebanese-industrialists.png'
import bta from '../../assets/images/partners/bta.png'
import cii from '../../assets/images/partners/confederation-of-indian-industry.png'
import dcib from '../../assets/images/partners/dutch-council-for-international-business.png'
import cci_feed from '../../assets/images/partners/f-of-lebanon.png'




class Partners extends Component{
  state = {
    armenian_partners:[
      {
        id:"gov",
        src: gov
      },
      {
        id:"min",
        src: min
      },
      {
        id:"mid",
        src: mid
      },
      {
        id:"travel",
        src: travel
      },
      {
        id:"atdf",
        src: atdf
      },
      {
        id:"vine_wine",
        src: vine_wine
      },
      {
        id:"cilicia",
        src: cilicia
      },
      {
        id:"goarmenian_caritasv",
        src: armenian_caritas
      },
      {
        id:"rip",
        src: rip
      },
      {
        id:"invest_club",
        src: invest_club
      },
      {
        id:"repat_armenia",
        src: repat_armenia
      },
      {
        id:"yenokavan",
        src: yenokavan
      },
      {
        id:"sau",
        src: sau
      },
      {
        id:"cmyk",
        src: cmyk
      }
    ],
    international_partners:[
      {
        id:"adb",
        src: adb
      },
      {
        id:"undp",
        src: undp
      },
      {
        id:"ada",
        src: ada
      },
      {
        id:"ifc",
        src: ifc
      },
      {
        id:"giz",
        src: giz
      },
      {
        id:"eu",
        src: eu
      },
      {
        id:"itc",
        src: itc
      },
      {
        id:"wbg",
        src: wbg
      },
      {
        id:"rdcl_world",
        src: rdcl_world
      },
      {
        id:"ali",
        src: ali
      },
      {
        id:"bta",
        src: bta
      },
      {
        id:"cii",
        src: cii
      },
      {
        id:"dcib",
        src: dcib
      },
      {
        id:"cci_feed",
        src: cci_feed
      }
    ]
  }

  render(){
    const {armenian_partners} = this.state
    const {international_partners} = this.state
    const armenianPartners = armenian_partners.map(item=>
      <div key={item.id} className="col-xs-6 col-md-2">
        <div className="home-partner">
          <a href={'http://www.gov.am/am/'} rel="noopener noreferrer" target="_blank">
            <img src={item.src} alt='' className="img-responsive" />
          </a>
        </div>
      </div>
    )
    const internationalPartners = international_partners.map(item=>
      <div key={item.id} className="col-xs-6 col-md-2">
        <div className="home-partner">
          <a href={'http://www.gov.am/am/'} rel="noopener noreferrer" target="_blank">
            <img src={item.src} alt='' className="img-responsive" />
          </a>
        </div>
      </div>
    )
    return(
      <>
        <div className="all-content">
          <div className="container partner-container">
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>Հայաստանյան գործընկերներ</p>
                </div>
                <div className="page-description">
                  <div className="row">
                    {armenianPartners}
                  </div>

                  <div className="row">
                    <div className="col-xs-12">
                      <div className="home-partner-title-div">
                        <p className="home-partner-title">Միջազգային գործընկերներ</p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {internationalPartners}
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

export default Partners