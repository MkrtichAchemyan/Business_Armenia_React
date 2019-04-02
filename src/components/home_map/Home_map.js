import React, { Component} from 'react'


class HomeMap extends Component{
  changeUrl = (url)=>{
    this.props.history.push(url)
  };
  render(){

    return(
      <>
        <div className="container-fluid">
          <div className="home-map row">
            <div className="col-xs-12">
              <p className="home-map-title1">Դառնալ մեր</p>
              <p className="home-map-title2">Ներկայացուցիչը</p>
              <a className="home-map-link" onClick={()=>{this.changeUrl('/footprint')}}>Միանալ մեզ</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default HomeMap