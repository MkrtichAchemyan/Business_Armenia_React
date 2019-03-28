import React, { Component} from 'react'
import $ from 'jquery'


class IndexNumbers extends Component{

  componentDidMount(){
    $(window).on('scroll',function() {
      $('.home-statistics-count').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $('.home-statistics:first-child').find(this).text(Math.ceil(now));
            $('.home-statistics:nth-child(2)').find(this).text(now.toFixed(3));
            $('.home-statistics:nth-child(3)').find(this).text(now.toFixed(2));
            $('.home-statistics:nth-child(4)').find(this).text(Math.ceil(now));
          }
        });
      });
      $(window).off('scroll');

    });
  }

  render(){
    const {index_numbers} = this.props
    const index_number_item = index_numbers.map(item=>
      <div key={item.id} className="col-md-3 col-xs-6 home-statistics home-statistics-case-4">
        <div className="features">
          <div className="home-statistics-all">
            <div className="home-statistics-text">
              <h1 className="home-statistics-count">{item.count}</h1>
              <h2 className="home-statistics-title ">{item.title?item.title:<br/>}</h2>
              <h3 className="home-statistics-1">{item.statistics}</h3>
            </div>
          </div>
        </div>
      </div>
    )
    return(
      <>
        <div className="container" id='counter_container'>
          <div className="row index-number-blocks">
            {index_number_item}
          </div>
        </div>
      </>
    )
  }
}

export default IndexNumbers