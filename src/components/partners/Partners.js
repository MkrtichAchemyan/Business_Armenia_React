import React, { Component} from 'react'


class Partners extends Component{
  render(){
    const {partners} = this.props
    const pasrtner = partners.map(item=>
      <div key={item.id} className="col-xs-6 col-md-2">
        <div className="home-partner">
          <a href="#" target="_blank">
            <img src={item.src} alt='' className="img-responsive" />
          </a>
        </div>
      </div>
    )
    return(
      <>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="home-partner-title-div">
                <p className="home-news-title-c1">
                  <a href="#">Գործընկերներ</a></p>
              </div>
              <div className="row">
                {pasrtner}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Partners