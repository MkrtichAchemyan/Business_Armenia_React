import React, { Component } from 'react'
import pdf from '../../assets/pdf/Insider_Trading.pdf'
import img_1 from '../../assets/images/0037.jpg'
import img_2 from '../../assets/images/0038.jpg'


class CorporateStyle extends Component{
  render(){

    return(
      <>
        <div className="all-content">
          <div className="container corporate-all">

            <div className="row ">
              <div className="col-xs-12">
                <div className="page-title">
                  <p>Կորպորատիվ Կառավարում</p>
                </div>
                <div className="page-description">
                  Կերպարանափոխված Բիզնես Արմենիան (նախկինում՝ Հայաստանի Զարգացման Հիմնադրամ) հանդես է գալիս<span
                  className="business-support-content-span"> նոր անվամբ, կարգախոսով և լոգոյով</span>:<br/><br/>
                  <span className="business-support-content-span">Բիզնես Արմենիա</span> անունն իր մեջ ամփոփում է
                  կառույցի կողմից իրականացվող հիմնական գործառույթները. աջակցություն հայաստանյան ձեռնարկություններին՝ կամ
                  ներդրումների ներգրավման ու բիզնեսի ընդլայնման, կամ նոր շուկաների բացահայտման միջոցով արտահանման
                  ծավալների ավելացման նպատակով։<br/><br/>
                  <span className="business-support-content-span">«Ընդլայնելով սահմանները»</span> կարգախոսը. ժամանակակից
                  աշխարհը լի է անսահմանափակ հնարավորություններով: Միակ սահմանները, որ գոյություն ունեն, մեր մտքում են:
                  Այժմ ցանկացած սահմանափակում կարող է փոխվել, ցանկացած սահման՝ տեղաշարժվել: <br/><br/>
                  Սահմաններն այլևս խոչընդոտ չեն։<br/><br/>
                  <span className="business-support-content-span">Լոգոն,</span> որպես կազմակերպության բրենդային
                  ինքնության մաս, բաղկացած է երկու հիմնական տարրերից. ներդաշնակությունն ու անթերին խորհրդանշող
                  շրջաններից, ինչպես նաև՝ Բիզնես Արմենիայի ու իր թիմի էներգիան, ավյունը, ուժն ու գործունեությունն
                  ընդգծող պայծառ կարմիր գույնից։
                </div>
              </div>
            </div>

            <div className="page-description row">
              <div className="col-sm-4 team-all-col" style={{marginTop:0}}>
                <div className="event-content" style={{marginTop:0}}>
                  <a href={pdf} className="corporate-style-pdf attachmentWrapper">
                    <div className="team-all-img brandbook-single-img">
                      <img src={img_1} className="img-responsive" alt=''/>
                    </div>

                    <div className="team-all-text brandbook-single">
                      <h3>BRAND TOOLKIT | Կորպորատիվ հաղորդակցություն</h3>
                    </div>
                    <div className="event-read-more">
                      <p>Ավելին...</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4 team-all-col" style={{marginTop:0}}>
                <div className="event-content" style={{marginTop:0}}>
                  <a href={pdf} className="corporate-style-pdf attachmentWrapper">
                    <div className="team-all-img brandbook-single-img">
                      <img src={img_2} className="img-responsive" alt=""/>
                    </div>

                    <div className="team-all-text brandbook-single">
                      <h3>BRAND TOOLKIT | Կորպորատիվ հաղորդակցություն</h3>
                    </div>
                    <div className="event-read-more">
                      <p>Ավելին...</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CorporateStyle