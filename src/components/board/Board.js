import React, { Component } from 'react'
import {connect} from "react-redux/src";
import {getBoard} from "../../actions/index"


class Board extends Component{
  componentDidMount() {
    this.props.board()

  }
  render(){
    const persons = this.props.data;
    const person = persons && persons.map(person=>
      <div className="col-sm-4 team-all-col" key={person.id}>
        <div className="team-all">
          <div className="team-all-img">
            <img src={person.img} className="img-responsive" alt=''/>
          </div>
          <div className="team-all-text">
            <h3>{person.fullName}</h3>
            <p>{person.position}</p>
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
                  <p>Հոգաբարձուների Խորհրդի անդամներ</p>
                </div>

                <div className="page-description">
                  <p>Բիզնես Արմենիայի հոգաբարձուների խորհուրդը հիմնադրամի վերահսկողությունն իրականացնող բարձրագույն
                    կառավարման մարմինն է, որը բաղկացած է 15 անդամից: Խորհրդի նախագահը Հայաստանի Հանրապետության
                    փոխվարչապետն է: Հոգաբարձուների խորհրդի մյուս անդամները նշանակվում են խորհրդի նախագահի կողմից՝
                    հետևյալ կարգով.</p>
                  <ul style={{color:'#606060'}}>
                    <li>Մեկ ներկայացուցիչ ՀՀ նախագահի աշխատակազմի ղեկավարի առաջադրմամբ,</li>
                    <li>Մեկ ներկայացուցիչ ՀՀ կառավարության աշխատակազմի ղեկավարի առաջադրմամբ,</li>
                    <li>Մեկական ներկայացուցիչ ՀՀ Տնտեսական զարգացման և ներդրումների, Արտաքին գործերի, Գյուղատնտեսության,
                      Տարածքային կառավարման և զարգացման, Ֆինանսների նախարարություններից՝ համապատասխան նախարարի
                      առաջադրմամբ,
                    </li>
                    <li>Մեկ ներկայացուցիչ ՀՀ Տնտեսական զարգացման և ներդրումների նախարարության զբոսաշրջության պետական
                      կոմիտեի նախագահի առաջադրմամբ,
                    </li>
                    <li>Վեց ներկայացուցիչ գիտական, հասարակական և մասնավոր հատվածից՝ ի պաշտոնե, հիմնադրամի գործադիր
                      տնօրենի առաջադրմամբ:
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="row">
              {person}
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
    data: state.board.data
  }
}

const mapDispatchToProps = {
  board: getBoard,
};


export default connect(mapStateToProps,mapDispatchToProps)(Board)